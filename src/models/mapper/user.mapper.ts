import { LoginDto } from "@src/models/dto/user.dto";

function buildLoginDto({
  email,
  password,
}: {
  email: string;
  password: string;
}): LoginDto {
  return { email, pwd: password };
}

const UserMapper = {
  buildLoginDto,
};

export default UserMapper;
