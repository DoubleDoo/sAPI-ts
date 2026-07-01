export class MeshokAPIError extends Error {
  constructor(
    message: string,
    public readonly code: number,
    public readonly details: Record<string, unknown> | null,
    public readonly account: number,
    public readonly cost: number,
    public readonly balance: number,
    public readonly expire: number,
  ) {
    super(message)
    this.name = 'MeshokAPIError'
  }
}
