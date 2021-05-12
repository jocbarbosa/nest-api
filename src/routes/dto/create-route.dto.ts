interface PositionDto {
  latitude: number,
  longitude: number
}

export class CreateRouteDto {
  title: string;

  startPosition: PositionDto;

  endPosition: PositionDto;
}
