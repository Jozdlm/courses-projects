import { User } from "../models/user";

/**
 *
 * @param {Like<User>} userDto
 * @returns {User}
 */
export const userDtoToModel = (userDto) => {
  const { id, isActive, balance, avatar, first_name, last_name, gender } =
    userDto;

  return new User({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
    gender,
  });
};
