export interface IAdress {
  email: string;
  name: string;
}

export interface Imessage {
  to: IAdress;
  from: IAdress;
  subject: string;
  body: string;
}

export interface IMailProvier {
  sendMail(message: Imessage): Promise<void>;
}
