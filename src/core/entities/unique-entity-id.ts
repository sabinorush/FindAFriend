export class UniqueEntityId {
  private value: string

  constructor(value?: string) {
    this.value = value ?? this.generateUniqueId()
  }

  private generateUniqueId(): string {
    return crypto.randomUUID()
  }

  getValue(): string {
    return this.value
  }

  equals(other: UniqueEntityId): boolean {
    return this.value === other.value
  }
}
