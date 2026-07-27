const MoveMode = {
    IDLE: "idle",

    FORWARD: "forward",
    FORWARD_LEFT: "forward_left",
    FORWARD_RIGHT: "forward_right",

    BACKWARD: "backward",
    BACKWARD_LEFT: "backward_left",
    BACKWARD_RIGHT: "backward_right",

    ROTATE_LEFT: "rotate_left",
    ROTATE_RIGHT: "rotate_right"
};

const PLAYER_SHIPS = [

    // ship 01 ------------------------------------------------
    {
        id: 0,
        name: "ship_01",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 0, sy: 0, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 53,

        reverseSpeedRatio: 0.5,     // 전진 대비 후진 속도비
        speedStat: 1,                  // 전진 스피드
        rotStat: 1,                      // 회전 속도

// y를 조절해야 옆으로 움직임!
        weaponMounts: [
            { cannonId:"basic", offset:{x:-5,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:-5,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_front_left_small",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_LEFT]
            },
            {
                id: "sub_front_right_small",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_RIGHT]
            }
        ]
    },

    // ship 02 ------------------------------------------------
    {
        id: 1,
        name: "ship_02",

        stats: {
            baseHP: 177,
            hpPerLevel: 3,

            baseEnergy: 158,
            energyPerLevel: 2
        },

        sheet: { sx: 256, sy: 0, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 56,

        reverseSpeedRatio: 0.46,
        speedStat: 1.1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"rapid", offset:{x:-4,y:-10}, angleOffset:0 },
            { cannonId:"rapid", offset:{x:-4,y:10}, angleOffset:0 }
        ],
 
        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.25 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.25 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.35, y: -0.08 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.35, y: -0.08 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_front_left_small",
                offset: { x: -0.35, y: -0.08 },
                angle: Math.PI,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_LEFT]
            },
            {
                id: "sub_front_right_small",
                offset: { x: 0.35, y: -0.08 },
                angle: Math.PI,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_RIGHT]
            }
        ]
    },

    // ship 03 ------------------------------------------------
    {
        id: 2,
        name: "ship_03",

        stats: {
            baseHP: 216,
            hpPerLevel: 4,

            baseEnergy: 118,
            energyPerLevel: 2
        },

        sheet: { sx: 512, sy: 0, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 64,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 0.8,

        weaponMounts: [
            { cannonId:"laser", offset:{x:0,y:0}, angleOffset:0 },
        ],

        engines: [
            {
                id: "main_back_left",
                offset: { x: -0.18, y: 0.25 },
                angle: 0,
                scale: 0.5,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "main_back_right",
                offset: { x: 0.18, y: 0.25 },
                angle: 0,
                scale: 0.5,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.18, y: 0.25 },
                angle: 0,
                scale: 0.3,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.18, y: 0.25 },
                angle: 0,
                scale: 0.3,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_front_left_small",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_LEFT]
            },
            {
                id: "sub_front_right_small",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_RIGHT]
            }
        ]
    },

    // ship 04 ------------------------------------------------
    {
        id: 3,
        name: "ship_04",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 197,
            energyPerLevel: 3
        },

        sheet: { sx: 768, sy: 0, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 65,

        reverseSpeedRatio: 0.7,
        speedStat: 0.98,
        rotStat: 1.2,

        weaponMounts: [
            { cannonId:"basic", offset:{x:-9,y:-22}, angleOffset:0 },
            { cannonId:"basic", offset:{x:-9,y:22}, angleOffset:0 }
        ],

        engines: [
            {
                id: "main_back_left",
                offset: { x: -0.12, y: 0.27 },
                angle: 0,
                scale: 0.5,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "main_back_right",
                offset: { x: 0.12, y: 0.27 },
                angle: 0,
                scale: 0.5,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_RIGHT, MoveMode.FORWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_RIGHT, MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_back_left2",
                offset: { x: -0.55, y: 0.2 },
                angle: 0.22,
                scale: 0.18,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right2",
                offset: { x: 0.55, y: 0.2 },
                angle: -0.22,
                scale: 0.18,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.38, y: -0.11 },
                angle: Math.PI,
                scale: 0.35,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.38, y: -0.11 },
                angle: Math.PI,
                scale: 0.35,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_front_left_small",
                offset: { x: -0.38, y: -0.11 },
                angle: Math.PI,
                scale: 0.24,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_LEFT]
            },
            {
                id: "sub_front_right_small",
                offset: { x: 0.38, y: -0.11 },
                angle: Math.PI,
                scale: 0.24,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_RIGHT]
            }
        ]
    },

    // ship 05 ------------------------------------------------
    {
        id: 4,
        name: "ship_05",

        stats: {
            baseHP: 158,
            hpPerLevel: 2,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 0, sy: 256, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 49,

        reverseSpeedRatio: 0.4,
        speedStat: 1.12,
        rotStat: 0.8,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.39 },
                angle: 0,
                scale: 0.6,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.22, y: 0.45 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.22, y: 0.45 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.15, y: -0.26 },
                angle: Math.PI-0.2,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.15, y: -0.26 },
                angle: Math.PI+0.2,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_front_left_small",
                offset: { x: -0.15, y: -0.26 },
                angle: Math.PI-0.2,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_LEFT]
            },
            {
                id: "sub_front_right_small",
                offset: { x: 0.15, y: -0.26 },
                angle: Math.PI+0.2,
                scale: 0.15,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_RIGHT]
            }
        ]
    },

    // ship 06 ------------------------------------------------
    {
        id: 5,
        name: "ship_06",

        stats: {
            baseHP: 168,
            hpPerLevel: 2,

            baseEnergy: 276,
            energyPerLevel: 4
        },

        sheet: { sx: 256, sy: 256, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 66,

        reverseSpeedRatio: 0.6,
        speedStat: 0.92,
        rotStat: 1.4,

        weaponMounts: [
            { cannonId:"rapid", offset:{x:-8,y:-23}, angleOffset:-0.1 },
            { cannonId:"rapid", offset:{x:-3,y:-8}, angleOffset:-0.03 },
            { cannonId:"rapid", offset:{x:-3,y:8}, angleOffset:0.03 },
            { cannonId:"rapid", offset:{x:-8,y:23}, angleOffset:0.1 }
        ],

        engines: [
            {
                id: "main_back_left",
                offset: { x: -0.08, y: 0.39 },
                angle: 0,
                scale: 0.4,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "main_back_right",
                offset: { x: 0.08, y: 0.39 },
                angle: 0,
                scale: 0.4,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT]
            },
            {
                id: "main_back_left_small",
                offset: { x: -0.08, y: 0.39 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.ROTATE_RIGHT, MoveMode.FORWARD_LEFT]
            },
            {
                id: "main_back_right_small",
                offset: { x: 0.08, y: 0.39 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.ROTATE_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.55, y: 0.13 },
                angle: -0.2,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.ROTATE_RIGHT, MoveMode.FORWARD_RIGHT, MoveMode.BACKWARD_LEFT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.55, y: 0.13 },
                angle: 0.2,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.ROTATE_LEFT, MoveMode.FORWARD_LEFT, MoveMode.BACKWARD_RIGHT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.20, y: -0.38 },
                angle: Math.PI-0.15,
                scale: 0.3,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.20, y: -0.38 },
                angle: Math.PI+0.15,
                scale: 0.3,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_front_left2",
                offset: { x: -0.55, y: -0.19 },
                angle: Math.PI+0.15,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT, MoveMode.FORWARD_LEFT]
            },
            {
                id: "sub_front_right2",
                offset: { x: 0.55, y: -0.19 },
                angle: Math.PI-0.15,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT, MoveMode.FORWARD_RIGHT]
            }
        ]
    },

    // ship 07 ------------------------------------------------
    {
        id: 6,
        name: "ship_07",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 512, sy: 256, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 80,

        reverseSpeedRatio: 0.5,
        speedStat: 0.98,
        rotStat: 0.9,

        weaponMounts: [
            { cannonId:"rapid", offset:{x:-13,y:-22}, angleOffset:0 },
            { cannonId:"rapid", offset:{x:-13,y:22}, angleOffset:0 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.75,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.6, y: 0.28 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.6, y: 0.28 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.55, y: -0.07 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.55, y: -0.07 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_front_left2",
                offset: { x: -0.65, y: 0.05 },
                angle: Math.PI-0.25,
                scale: 0.2,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.BACKWARD_LEFT]
            },
            {
                id: "sub_front_right2",
                offset: { x: 0.65, y: 0.05 },
                angle: Math.PI+0.25,
                scale: 0.2,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.BACKWARD_LEFT]
            }
        ]
    },

    // ship 08 ------------------------------------------------
    {
        id: 7,
        name: "ship_08",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 768, sy: 256, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 82,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:-15,y:0}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:15,y:0}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 09 ------------------------------------------------
    {
        id: 8,
        name: "ship_09",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 0, sy: 512, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 61,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:-15,y:0}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:15,y:0}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 10 ------------------------------------------------
    {
        id: 9,
        name: "ship_10",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 256, sy: 512, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 63,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:-15,y:0}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:15,y:0}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 11 ------------------------------------------------
    {
        id: 10,
        name: "ship_11",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 512, sy: 512, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 75,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:-15,y:0}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:15,y:0}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 12 ------------------------------------------------
    {
        id: 11,
        name: "ship_12",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 768, sy: 512, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 82,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 13 ------------------------------------------------
    {
        id: 12,
        name: "ship_13",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 0, sy: 768, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 54,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 14 ------------------------------------------------
    {
        id: 13,
        name: "ship_14",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 256, sy: 768, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 59,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 15 ------------------------------------------------
    {
        id: 14,
        name: "ship_15",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 512, sy: 768, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 67,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 16 ------------------------------------------------
    {
        id: 15,
        name: "ship_16",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 768, sy: 768, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 85,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 17 ------------------------------------------------
    {
        id: 16,
        name: "ship_17",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 0, sy: 1024, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 44,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 18 ------------------------------------------------
    {
        id: 17,
        name: "ship_18",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 256, sy: 1024, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 56,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 19 ------------------------------------------------
    {
        id: 18,
        name: "ship_19",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 512, sy: 1024, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 60,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 20 ------------------------------------------------
    {
        id: 19,
        name: "ship_20",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 768, sy: 1024, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 67,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 21 ------------------------------------------------
    {
        id: 20,
        name: "ship_21",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 1024, sy: 1024, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 78,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 22 ------------------------------------------------
    {
        id: 21,
        name: "ship_22",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 0, sy: 1280, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 57,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 23 ------------------------------------------------
    {
        id: 22,
        name: "ship_23",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 256, sy: 1280, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 59,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 24 ------------------------------------------------
    {
        id: 23,
        name: "ship_24",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 512, sy: 1280, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 69,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    },

    // ship 25 ------------------------------------------------
    {
        id: 24,
        name: "ship_25",

        stats: {
            baseHP: 197,
            hpPerLevel: 3,

            baseEnergy: 217,
            energyPerLevel: 3
        },

        sheet: { sx: 768, sy: 1280, sw: 256, sh: 256 },
        baseDrawR: 128,
        baseHitR: 88,

        reverseSpeedRatio: 0.5,
        speedStat: 1,
        rotStat: 1,

        weaponMounts: [
            { cannonId:"basic", offset:{x:0,y:-10}, angleOffset:-0.2 },
            { cannonId:"basic", offset:{x:0,y:0}, angleOffset:0 },
            { cannonId:"basic", offset:{x:0,y:10}, angleOffset:0.2 }
        ],

        engines: [
            {
                id: "main_back",
                offset: { x: 0.0, y: 0.4 },
                angle: 0,
                scale: 0.7,
                flameType: 0,
                activeOn: [MoveMode.FORWARD, MoveMode.FORWARD_LEFT, MoveMode.FORWARD_RIGHT]
            },
            {
                id: "sub_back_left",
                offset: { x: -0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_RIGHT, MoveMode.ROTATE_RIGHT]
            },
            {
                id: "sub_back_right",
                offset: { x: 0.45, y: 0.2 },
                angle: 0,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.FORWARD_LEFT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_left",
                offset: { x: -0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_RIGHT, MoveMode.ROTATE_LEFT]
            },
            {
                id: "sub_front_right",
                offset: { x: 0.45, y: -0.13 },
                angle: Math.PI,
                scale: 0.25,
                flameType: 0,
                activeOn: [MoveMode.BACKWARD, MoveMode.BACKWARD_LEFT, MoveMode.ROTATE_RIGHT]
            }
        ]
    }
];