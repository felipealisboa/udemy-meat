export class User {
  constructor(public email: string, public name: string, private password: string){}

  macthes(another: User): boolean {
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.email
  }
}



export const users: {[key: string]: User} = {
  "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana23'),
  "rodrigo@gmail.com": new User('rodrigo@gmail.com', 'Rodrigo', 'rodrigo23'),
  "felipe@gmail.com": new User('felipe@gmail.com', 'Felipe', 'felipe23')
}
