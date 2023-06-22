import { EmailLogWhereInput } from "./EmailLogWhereInput";
import { EmailLogOrderByInput } from "./EmailLogOrderByInput";

export type EmailLogFindManyArgs = {
  where?: EmailLogWhereInput;
  orderBy?: Array<EmailLogOrderByInput>;
  skip?: number;
  take?: number;
};
