import { Status } from "../types/dayInfoType";

export const ConvertStatusToString = (status: Status) => {
    switch (status) {
        case Status.Free:
            return "Вільно";
        case Status.TemporaryHold:
            return "Рогзлядається";
        case Status.Done:
            return "Виконано";
        case Status.Reserv:
            return "Зарезервовано";
        case Status.Canceled:
            return "Відмінено";
    }
}