export type User = {
    username: string
    profilePicture: string,
    crowns: number,
    seasonChampions: number,
    offense: number,
    defense: number,
    athleticism: number,
    starterBuild: BuildKeys,
    attributes: Attributes,
    tendencies: Tendencies,
}

// Define the possible keys for the attributes
export type AttributeKeys = 
| 'threePointShot'
| 'midRangeShot'
| 'closeShot'
| 'layup'
| 'ballHandle'
| 'interiorDefense'
| 'perimeterDefense'
| 'steal'
| 'block'
| 'speed'
| 'strength'
| 'stamina';

export type ATTRIBUTE_KEY_TYPE = {
    THREE_POINT_SHOT: AttributeKeys,
    MID_RANGE_SHOT: AttributeKeys,
    CLOSE_SHOT: AttributeKeys,
    LAYUP: AttributeKeys,
    BALL_HANDLE: AttributeKeys,
    INTERIOR_DEFENSE: AttributeKeys,
    PERIMETER_DEFENSE: AttributeKeys,
    STEAL: AttributeKeys,
    BLOCK: AttributeKeys,
    SPEED: AttributeKeys,
    STRENGTH: AttributeKeys,
    STAMINA: AttributeKeys,
};  

// Define the Attributes type with numeric values
export type Attributes = {
    [key in AttributeKeys]: number;  // Map each attribute key to a number
};

export type TendencyKeys = 
| 'threePointShot'
| 'midRangeShot'
| 'closeShot'
| 'layup';

export type TENDENCY_KEY_TYPE = {
    THREE_POINT_SHOT: TendencyKeys,
    MID_RANGE_SHOT: TendencyKeys,
    CLOSE_SHOT: TendencyKeys,
    LAYUP: TendencyKeys,
};  

export type Tendencies = {
    [key in TendencyKeys]: number;
}

export type BuildKeys = 
| 'Pro Build'
| 'Sharp Shooter Build'
| 'Lockdown Defender Build'
| 'Shifty Slasher Build'

export type Build = {
    name: string,
    attributes: Attributes
}