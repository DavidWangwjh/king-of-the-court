import { ATTRIBUTE_KEY_TYPE, Attributes, Build, Tendencies } from "./Types"

export const ProBuildBaseAttributes: Attributes = {
    'threePointShot': 25,
    'midRangeShot': 25,
    'closeShot': 25,
    'layup': 25,
    'ballHandle': 25,
    'interiorDefense': 25,
    'perimeterDefense': 25,
    'steal': 25,
    'block': 25,
    'speed': 25,
    'strength': 25,
    'stamina': 25
}

export const SharpShooterBuildBaseAttributes: Attributes = {
    'threePointShot': 40,
    'midRangeShot': 40,
    'closeShot': 25,
    'layup': 20,
    'ballHandle': 20,
    'interiorDefense': 20,
    'perimeterDefense': 20,
    'steal': 20,
    'block': 20,
    'speed': 25,
    'strength': 25,
    'stamina': 25
}

export const LockdownDefenderBuildBaseAttributes: Attributes = {
    'threePointShot': 20,
    'midRangeShot': 20,
    'closeShot': 20,
    'layup': 20,
    'ballHandle': 15,
    'interiorDefense': 35,
    'perimeterDefense': 35,
    'steal': 30,
    'block': 30,
    'speed': 25,
    'strength': 25,
    'stamina': 25
}

export const ShiftySlasherBuildBaseAttributes: Attributes = {
    'threePointShot': 20,
    'midRangeShot': 20,
    'closeShot': 20,
    'layup': 40,
    'ballHandle': 40,
    'interiorDefense': 20,
    'perimeterDefense': 20,
    'steal': 20,
    'block': 20,
    'speed': 35,
    'strength': 20,
    'stamina': 25
}

export const STARTER_BUILD_BASE_ATTRIBUTES = {
    'Pro Build': ProBuildBaseAttributes,
    'Sharp Shooter Build': SharpShooterBuildBaseAttributes,
    'Lockdown Defender Build': LockdownDefenderBuildBaseAttributes,
    'Shifty Slasher Build': ShiftySlasherBuildBaseAttributes
}

export const STARTER_BUILD_NAMES = {
    PRO_BUILD: 'Pro Build',
    SHARP_SHOOTER_BUILD: 'Sharp Shooter Build',
    LOCKDOWN_DEFENDER_BUILD: 'Lockdown Defender Build',
    SHIFTY_SLASHER_BUILD: 'Shifty Slasher Build'
}

export const STARTER_BUILDS: Build[] = [
    {name: 'Pro', attributes: ProBuildBaseAttributes},
    {name: 'Sharp Shooter', attributes: SharpShooterBuildBaseAttributes},
    {name: 'Lockdown Defender', attributes: LockdownDefenderBuildBaseAttributes},
    {name: 'Shifty Slasher', attributes: ShiftySlasherBuildBaseAttributes}
]

export const ATTRIBUTE_NAME = {
    THREE_POINT_SHOT: 'Three-Point Shot',
    MID_RANGE_SHOT: 'Mid-Range Shot',
    CLOSE_SHOT: 'Close Shot',
    LAYUP: 'Layup',
    BALL_HANDLE: 'Ball Handle',
    INTERIOR_DEFENSE: 'Interior Defense',
    PERIMETER_DEFENSE: 'Perimeter Defense',
    STEAL: 'Steal',
    BLOCK: 'Block',
    SPEED: 'Speed',
    STRENGTH: 'Strength',
    STAMINA: 'Stamina',
};

export const ATTRIBUTE_KEY: ATTRIBUTE_KEY_TYPE = {
    THREE_POINT_SHOT: 'threePointShot',
    MID_RANGE_SHOT: 'midRangeShot',
    CLOSE_SHOT: 'closeShot',
    LAYUP: 'layup',
    BALL_HANDLE: 'ballHandle',
    INTERIOR_DEFENSE: 'interiorDefense',
    PERIMETER_DEFENSE: 'perimeterDefense',
    STEAL: 'steal',
    BLOCK: 'block',
    SPEED: 'speed',
    STRENGTH: 'strength',
    STAMINA: 'stamina',
};  

export const BASE_ATTRIBUTE_POINTS = 300;
export const MAX_ATTRIBUTE_POINTS = 800;
