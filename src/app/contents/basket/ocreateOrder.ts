export default class Order{
  constructor(
    public id: number,
    public user_Id: number,
    public comment: string,
    public created_At?: string,
  ) {}


}

