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
import { SeasonController } from "../season.controller";
import { SeasonService } from "../season.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  updatedAt: new Date(),
  id: 42,
  name: "exampleName",
  startDate: new Date(),
  endDate: new Date(),
  midseasonDate: new Date(),
  numTeams: 42,
  playersPerTeam: 42,
  scheduleCreated: 42,
  createdAt: new Date(),
};
const CREATE_RESULT = {
  updatedAt: new Date(),
  id: 42,
  name: "exampleName",
  startDate: new Date(),
  endDate: new Date(),
  midseasonDate: new Date(),
  numTeams: 42,
  playersPerTeam: 42,
  scheduleCreated: 42,
  createdAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    updatedAt: new Date(),
    id: 42,
    name: "exampleName",
    startDate: new Date(),
    endDate: new Date(),
    midseasonDate: new Date(),
    numTeams: 42,
    playersPerTeam: 42,
    scheduleCreated: 42,
    createdAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  updatedAt: new Date(),
  id: 42,
  name: "exampleName",
  startDate: new Date(),
  endDate: new Date(),
  midseasonDate: new Date(),
  numTeams: 42,
  playersPerTeam: 42,
  scheduleCreated: 42,
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

describe("Season", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SeasonService,
          useValue: service,
        },
      ],
      controllers: [SeasonController],
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

  test("POST /seasons", async () => {
    await request(app.getHttpServer())
      .post("/seasons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        midseasonDate: CREATE_RESULT.midseasonDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /seasons", async () => {
    await request(app.getHttpServer())
      .get("/seasons")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          midseasonDate: FIND_MANY_RESULT[0].midseasonDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /seasons/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/seasons"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /seasons/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/seasons"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        midseasonDate: FIND_ONE_RESULT.midseasonDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /seasons existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/seasons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        midseasonDate: CREATE_RESULT.midseasonDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/seasons")
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
