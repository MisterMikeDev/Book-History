export interface UserProfile {
    full_name: string;
    username: string;
    password: string;
    role: number;
}

export interface BookRequest {
    _id?: number;
    studentName: string;
    gradeAnGroup: string;
    matricle: string;
    bookName: string;
    bookAuthor: string;
    bookCode?: string;
    dateToRequest: string;
    dateDelivery: string;
    image: string;
}

interface WorkstationRoles {
    Empleado: string;
    Administrativo: string;
    Mantenimiento: string;
    Directivos: string;
}

interface TimetableTimes {
    entry: string;
    exit: string;
}

export interface UserInformation {
    Username: string;
    Password: string;
    ControlNumber: number;
    FullName: string;
    SocialNumber: number;
    Address: string;
    Email: string;
    Escolarity?: string[];
    Titles?: string[]; 
    IngressDate: string;
    PhoneNumber: number;
    Workstation: keyof WorkstationRoles;
    Timetable: TimetableTimes;
    EmergencyContact: string;
}