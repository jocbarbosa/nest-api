import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";

class PositionDto {
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}

export class CreateRouteDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @ValidateNested()
  @IsNotEmpty()
  startPosition: PositionDto;

  @ValidateNested()
  @IsNotEmpty()
  endPosition: PositionDto;
}
