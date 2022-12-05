import { User } from './user'
import { left } from '../shared'
import { InvalidEmailError } from './erros/invalid-email-error'

describe('User domain class entity', () => {
  test('should not create user with invalid e-mail address', () => {
    const invalidEmail = 'invalid_email'
    const error = User.create({ name: 'any_name', email: invalidEmail })

    expect(error).toEqual(left(new InvalidEmailError()))
  })
})
