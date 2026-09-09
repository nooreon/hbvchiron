export type AgendaItemType = "cursus" | "wedstrijd" | "evenement";

export type AgendaItem = {
    id: number;
    titel: string;
    datum: string; // ISO: "YYYY-MM-DD"
    begintijd?: string; // hh:mm
    eindtijd?: string; // hh:mm
    locatie?: string;
    mapsUrl?: string;
    type: AgendaItemType;
};

export const agendaItems: AgendaItem[] = [
    {
        id: 1,
        titel: "Beweegmarkt",
        datum: "2026-09-05",
        begintijd: "12:00",
        eindtijd: "17:00",
        locatie: "Smilde",
        mapsUrl: "https://maps.app.goo.gl/KznAQoYza3gmSjX17",
        type: "evenement"
    },
    {
        id: 2,
        titel: "Wijkfeest Assen-Oost",
        datum: "2026-09-12",
        begintijd: "11:00",
        eindtijd: "16:00",
        type: "evenement"
    },
    {
        id: 3,
        titel: "Club BBQ",
        datum: "2026-09-12",
        begintijd: "17:00",
        type: "evenement"
    },
    {
        id: 4,
        titel: "Beweegmarkt",
        datum: "2026-09-18",
        begintijd: "14:00",
        eindtijd: "17:00",
        locatie: "De Omloop 5 · Beilen",
        type: "evenement"
    },
    {
        id: 5,
        titel: "Sportmarkt 4 Mijl van Assen",
        datum: "2026-09-19",
        begintijd: "11:00",
        eindtijd: "18:00",
        locatie: "Assen, Marsdijk",
        mapsUrl: "https://maps.app.goo.gl/AG7VEKDitHey1Hgv5",
        type: "evenement"
    },
    {
        id: 6,
        titel: "Open dag i.v.m. Nationale Sportweek",
        datum: "2026-09-26",
        begintijd: "10:00",
        eindtijd: "12:00",
        type: "evenement"
    },
    {
        id: 7,
        titel: "Open dag",
        datum: "2026-10-03",
        begintijd: "10:00",
        eindtijd: "12:30",
        locatie: "De Hardenberg 5 · Finsterwolde",
        type: "evenement"
    },
    {
        id: 8,
        titel: "Start kennismakingscursus",
        datum: "2026-10-05",
        begintijd: "19:00",
        eindtijd: "21:00",
        type: "cursus"
    },
    {
        id: 9,
        titel: "Wedstrijd",
        datum: "2026-10-11",
        type: "wedstrijd"
    }
];
