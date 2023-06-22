import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TeamscoreCopyController } from "../teamscoreCopy.controller";
import { TeamscoreCopyService } from "../teamscoreCopy.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  updatedAt: new Date(),
  id: 42,
  teamkey: 42,
  teamIid: 42,
  dateOfPlay: new Date(),
  points: 42.42,
  createdAt: new Date(),
};
const CREATE_RESULT = {
  updatedAt: new Date(),
  id: 42,
  teamkey: 42,
  teamIid: 42,
  dateOfPlay: new Date(),
  points: 42.42,
  createdAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    updatedAt: new Date(),
    id: 42,
    teamkey: 42,
    teamIid: 42,
    dateOfPlay: new Date(),
    points: 42.42,
    createdAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  updatedAt: new Date(),
  id: 42,
  teamkey: 42,
  teamIid: 42,
  dateOfPlay: new Date(),
  points: 42.42,
  createdAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("TeamscoreCopy", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TeamscoreCopyService,
          useValue: service,
        },
      ],
      controllers: [TeamscoreCopyController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /teamscoreCopies", async () => {
    await request(app.getHttpServer())
      .post("/teamscoreCopies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        dateOfPlay: CREATE_RESULT.dateOfPlay.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /teamscoreCopies", async () => {
    await request(app.getHttpServer())
      .get("/teamscoreCopies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          dateOfPlay: FIND_MANY_RESULT[0].dateOfPlay.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /teamscoreCopies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teamscoreCopies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /teamscoreCopies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teamscoreCopies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        dateOfPlay: FIND_ONE_RESULT.dateOfPlay.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /teamscoreCopies existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/teamscoreCopies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        dateOfPlay: CREATE_RESULT.dateOfPlay.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/teamscoreCopies")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
