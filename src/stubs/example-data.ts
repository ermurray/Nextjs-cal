import { Activities, TrainingSession } from "model/session"

export const scheduleSessions: TrainingSession = {
  date: new Date(),
  activity: {
    id: "1",
    name: Activities.Bike
  },
  target: {
    id: "1",
    name: "Recovery"
  }

} 


