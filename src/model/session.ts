/* eslint-disable no-unused-vars */
export type Optional<T> = T | null

export enum Activities {
  Jog = 'Jog',
  Run = 'Run',
  Sprints = 'Sprints',
  Bike = 'Bike',
  Inline = 'Inline',
  OnIce = 'On-Ice',
  Stairs = 'Stairs',
  Hills = 'Hills',
  HillSprints = "Hill Sprints",
  Immitations = 'Immitations',
  Wheights = 'Wheights',
  Flexability = 'Flexability',
  Course = 'Course',
  UpDowns = 'Up-Downs',
  CAMP = 'CAMP',
  RecoverAndFlexibility = 'Recover & Flexibility',
  OFF = 'OFF',
  TBD = 'TBD',


}

export type Activity = {
  id: string;
  name: string;

}

export type Target = {
  id: string;
  name: string;

}



export type TrainingSession = {
  date: Date;
  activity?: Optional<Activity>;
  target?: Optional<Target>;
}