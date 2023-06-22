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
import { ScoreController } from "../score.controller";
import { ScoreService } from "../score.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  scoreDate: new Date(),
  id: 42,
  lastname: "exampleLastname",
  firstname: "exampleFirstname",
  h1: 42,
  h2: 42,
  h3: 42,
  h4: 42,
  h5: 42,
  h6: 42,
  h7: 42,
  h8: 42,
  h9: 42,
  front: 42,
  fhndcp: 42,
  fnet: 42,
  ninePlayed: "exampleNinePlayed",
  press: "true",
  h10: 42,
  h11: 42,
  h12: 42,
  h13: 42,
  h14: 42,
  h15: 42,
  h16: 42,
  h17: 42,
  h18: 42,
  back: 42,
  bhndcp: 42,
  bnet: 42,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  scoreDate: new Date(),
  id: 42,
  lastname: "exampleLastname",
  firstname: "exampleFirstname",
  h1: 42,
  h2: 42,
  h3: 42,
  h4: 42,
  h5: 42,
  h6: 42,
  h7: 42,
  h8: 42,
  h9: 42,
  front: 42,
  fhndcp: 42,
  fnet: 42,
  ninePlayed: "exampleNinePlayed",
  press: "true",
  h10: 42,
  h11: 42,
  h12: 42,
  h13: 42,
  h14: 42,
  h15: 42,
  h16: 42,
  h17: 42,
  h18: 42,
  back: 42,
  bhndcp: 42,
  bnet: 42,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    scoreDate: new Date(),
    id: 42,
    lastname: "exampleLastname",
    firstname: "exampleFirstname",
    h1: 42,
    h2: 42,
    h3: 42,
    h4: 42,
    h5: 42,
    h6: 42,
    h7: 42,
    h8: 42,
    h9: 42,
    front: 42,
    fhndcp: 42,
    fnet: 42,
    ninePlayed: "exampleNinePlayed",
    press: "true",
    h10: 42,
    h11: 42,
    h12: 42,
    h13: 42,
    h14: 42,
    h15: 42,
    h16: 42,
    h17: 42,
    h18: 42,
    back: 42,
    bhndcp: 42,
    bnet: 42,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  scoreDate: new Date(),
  id: 42,
  lastname: "exampleLastname",
  firstname: "exampleFirstname",
  h1: 42,
  h2: 42,
  h3: 42,
  h4: 42,
  h5: 42,
  h6: 42,
  h7: 42,
  h8: 42,
  h9: 42,
  front: 42,
  fhndcp: 42,
  fnet: 42,
  ninePlayed: "exampleNinePlayed",
  press: "true",
  h10: 42,
  h11: 42,
  h12: 42,
  h13: 42,
  h14: 42,
  h15: 42,
  h16: 42,
  h17: 42,
  h18: 42,
  back: 42,
  bhndcp: 42,
  bnet: 42,
  createdAt: new Date(),
  updatedAt: new Date(),
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

describe("Score", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ScoreService,
          useValue: service,
        },
      ],
      controllers: [ScoreController],
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

  test("POST /scores", async () => {
    await request(app.getHttpServer())
      .post("/scores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        scoreDate: CREATE_RESULT.scoreDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /scores", async () => {
    await request(app.getHttpServer())
      .get("/scores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          scoreDate: FIND_MANY_RESULT[0].scoreDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /scores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/scores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /scores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/scores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        scoreDate: FIND_ONE_RESULT.scoreDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /scores existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/scores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        scoreDate: CREATE_RESULT.scoreDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/scores")
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
