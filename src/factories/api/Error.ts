class ApiRestStatus extends Error {
  public errorCode: number
  public apiMessage: string
  public apiCode: number

  constructor(message: string, errorCode = 0, apiMessage = '', apiCode = 0) {
    super(message) // 'Error' breaks prototype chain here
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain

    this.errorCode = errorCode
    this.apiMessage = apiMessage
    this.apiCode = apiCode
  }
}

export default ApiRestStatus
