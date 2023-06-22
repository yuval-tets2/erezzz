import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ClubList } from "./club/ClubList";
import { ClubCreate } from "./club/ClubCreate";
import { ClubEdit } from "./club/ClubEdit";
import { ClubShow } from "./club/ClubShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { CourseRatingList } from "./courseRating/CourseRatingList";
import { CourseRatingCreate } from "./courseRating/CourseRatingCreate";
import { CourseRatingEdit } from "./courseRating/CourseRatingEdit";
import { CourseRatingShow } from "./courseRating/CourseRatingShow";
import { CourseTeetypeList } from "./courseTeetype/CourseTeetypeList";
import { CourseTeetypeCreate } from "./courseTeetype/CourseTeetypeCreate";
import { CourseTeetypeEdit } from "./courseTeetype/CourseTeetypeEdit";
import { CourseTeetypeShow } from "./courseTeetype/CourseTeetypeShow";
import { EmailLogList } from "./emailLog/EmailLogList";
import { EmailLogCreate } from "./emailLog/EmailLogCreate";
import { EmailLogEdit } from "./emailLog/EmailLogEdit";
import { EmailLogShow } from "./emailLog/EmailLogShow";
import { HandicapList } from "./handicap/HandicapList";
import { HandicapCreate } from "./handicap/HandicapCreate";
import { HandicapEdit } from "./handicap/HandicapEdit";
import { HandicapShow } from "./handicap/HandicapShow";
import { HandicapHistoryList } from "./handicapHistory/HandicapHistoryList";
import { HandicapHistoryCreate } from "./handicapHistory/HandicapHistoryCreate";
import { HandicapHistoryEdit } from "./handicapHistory/HandicapHistoryEdit";
import { HandicapHistoryShow } from "./handicapHistory/HandicapHistoryShow";
import { HoleList } from "./hole/HoleList";
import { HoleCreate } from "./hole/HoleCreate";
import { HoleEdit } from "./hole/HoleEdit";
import { HoleShow } from "./hole/HoleShow";
import { MatchscoreList } from "./matchscore/MatchscoreList";
import { MatchscoreCreate } from "./matchscore/MatchscoreCreate";
import { MatchscoreEdit } from "./matchscore/MatchscoreEdit";
import { MatchscoreShow } from "./matchscore/MatchscoreShow";
import { MemberList } from "./member/MemberList";
import { MemberCreate } from "./member/MemberCreate";
import { MemberEdit } from "./member/MemberEdit";
import { MemberShow } from "./member/MemberShow";
import { RandomplayerList } from "./randomplayer/RandomplayerList";
import { RandomplayerCreate } from "./randomplayer/RandomplayerCreate";
import { RandomplayerEdit } from "./randomplayer/RandomplayerEdit";
import { RandomplayerShow } from "./randomplayer/RandomplayerShow";
import { ScheduleList } from "./schedule/ScheduleList";
import { ScheduleCreate } from "./schedule/ScheduleCreate";
import { ScheduleEdit } from "./schedule/ScheduleEdit";
import { ScheduleShow } from "./schedule/ScheduleShow";
import { ScoreList } from "./score/ScoreList";
import { ScoreCreate } from "./score/ScoreCreate";
import { ScoreEdit } from "./score/ScoreEdit";
import { ScoreShow } from "./score/ScoreShow";
import { SeasonList } from "./season/SeasonList";
import { SeasonCreate } from "./season/SeasonCreate";
import { SeasonEdit } from "./season/SeasonEdit";
import { SeasonShow } from "./season/SeasonShow";
import { SeasonCourseList } from "./seasonCourse/SeasonCourseList";
import { SeasonCourseCreate } from "./seasonCourse/SeasonCourseCreate";
import { SeasonCourseEdit } from "./seasonCourse/SeasonCourseEdit";
import { SeasonCourseShow } from "./seasonCourse/SeasonCourseShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { TeamCopyList } from "./teamCopy/TeamCopyList";
import { TeamCopyCreate } from "./teamCopy/TeamCopyCreate";
import { TeamCopyEdit } from "./teamCopy/TeamCopyEdit";
import { TeamCopyShow } from "./teamCopy/TeamCopyShow";
import { TeamscoreList } from "./teamscore/TeamscoreList";
import { TeamscoreCreate } from "./teamscore/TeamscoreCreate";
import { TeamscoreEdit } from "./teamscore/TeamscoreEdit";
import { TeamscoreShow } from "./teamscore/TeamscoreShow";
import { TeamscoreCopyList } from "./teamscoreCopy/TeamscoreCopyList";
import { TeamscoreCopyCreate } from "./teamscoreCopy/TeamscoreCopyCreate";
import { TeamscoreCopyEdit } from "./teamscoreCopy/TeamscoreCopyEdit";
import { TeamscoreCopyShow } from "./teamscoreCopy/TeamscoreCopyShow";
import { TeeList } from "./tee/TeeList";
import { TeeCreate } from "./tee/TeeCreate";
import { TeeEdit } from "./tee/TeeEdit";
import { TeeShow } from "./tee/TeeShow";
import { TestscheduleList } from "./testschedule/TestscheduleList";
import { TestscheduleCreate } from "./testschedule/TestscheduleCreate";
import { TestscheduleEdit } from "./testschedule/TestscheduleEdit";
import { TestscheduleShow } from "./testschedule/TestscheduleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"erezzz"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Club"
          list={ClubList}
          edit={ClubEdit}
          create={ClubCreate}
          show={ClubShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="CourseRating"
          list={CourseRatingList}
          edit={CourseRatingEdit}
          create={CourseRatingCreate}
          show={CourseRatingShow}
        />
        <Resource
          name="CourseTeetype"
          list={CourseTeetypeList}
          edit={CourseTeetypeEdit}
          create={CourseTeetypeCreate}
          show={CourseTeetypeShow}
        />
        <Resource
          name="EmailLog"
          list={EmailLogList}
          edit={EmailLogEdit}
          create={EmailLogCreate}
          show={EmailLogShow}
        />
        <Resource
          name="Handicap"
          list={HandicapList}
          edit={HandicapEdit}
          create={HandicapCreate}
          show={HandicapShow}
        />
        <Resource
          name="HandicapHistory"
          list={HandicapHistoryList}
          edit={HandicapHistoryEdit}
          create={HandicapHistoryCreate}
          show={HandicapHistoryShow}
        />
        <Resource
          name="Hole"
          list={HoleList}
          edit={HoleEdit}
          create={HoleCreate}
          show={HoleShow}
        />
        <Resource
          name="Matchscore"
          list={MatchscoreList}
          edit={MatchscoreEdit}
          create={MatchscoreCreate}
          show={MatchscoreShow}
        />
        <Resource
          name="Member"
          list={MemberList}
          edit={MemberEdit}
          create={MemberCreate}
          show={MemberShow}
        />
        <Resource
          name="Randomplayer"
          list={RandomplayerList}
          edit={RandomplayerEdit}
          create={RandomplayerCreate}
          show={RandomplayerShow}
        />
        <Resource
          name="Schedule"
          list={ScheduleList}
          edit={ScheduleEdit}
          create={ScheduleCreate}
          show={ScheduleShow}
        />
        <Resource
          name="Score"
          list={ScoreList}
          edit={ScoreEdit}
          create={ScoreCreate}
          show={ScoreShow}
        />
        <Resource
          name="Season"
          list={SeasonList}
          edit={SeasonEdit}
          create={SeasonCreate}
          show={SeasonShow}
        />
        <Resource
          name="SeasonCourse"
          list={SeasonCourseList}
          edit={SeasonCourseEdit}
          create={SeasonCourseCreate}
          show={SeasonCourseShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="TeamCopy"
          list={TeamCopyList}
          edit={TeamCopyEdit}
          create={TeamCopyCreate}
          show={TeamCopyShow}
        />
        <Resource
          name="Teamscore"
          list={TeamscoreList}
          edit={TeamscoreEdit}
          create={TeamscoreCreate}
          show={TeamscoreShow}
        />
        <Resource
          name="TeamscoreCopy"
          list={TeamscoreCopyList}
          edit={TeamscoreCopyEdit}
          create={TeamscoreCopyCreate}
          show={TeamscoreCopyShow}
        />
        <Resource
          name="Tee"
          list={TeeList}
          edit={TeeEdit}
          create={TeeCreate}
          show={TeeShow}
        />
        <Resource
          name="Testschedule"
          list={TestscheduleList}
          edit={TestscheduleEdit}
          create={TestscheduleCreate}
          show={TestscheduleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
