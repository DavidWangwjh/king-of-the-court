import { Attributes, Tendencies } from "./Types"

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

export const BASE_ATTRIBUTE_POINTS = {
    'Pro Build': ProBuildBaseAttributes,
    'Sharp Shooter Build': SharpShooterBuildBaseAttributes,
    'Lockdown Defender Build': LockdownDefenderBuildBaseAttributes,
    'Shifty Slasher Build': ShiftySlasherBuildBaseAttributes
}

export const MAX_ATTRIBUTE_POINTS = 800;
export const MAX_TENDENCIES = 100;