import { TestscheduleWhereInput } from "./TestscheduleWhereInput";
import { TestscheduleOrderByInput } from "./TestscheduleOrderByInput";

export type TestscheduleFindManyArgs = {
  where?: TestscheduleWhereInput;
  orderBy?: Array<TestscheduleOrderByInput>;
  skip?: number;
  take?: number;
};
