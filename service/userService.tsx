import { User } from "@/constants/Types";

export function getUser() {
    let user: User = {
        'username': 'davidwang777',
        'profilePicture': '#0000FF',
        'crowns': 10,
        'seasonChampions': 2,
        'offense': 90,
        'defense': 40,
        'athleticism': 35,
        'starterBuild': 'Pro Build',
        'attributes': {
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
        },
        'tendencies': {
            'threePointShot': 25,
            'midRangeShot': 25,
            'closeShot': 25,
            'layup': 25,
        }
    }
    return user;
}