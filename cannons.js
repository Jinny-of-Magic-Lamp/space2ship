// 대포 라이브러리
const CANNON_LIBRARY = {

    // #1 -------- Basic Cannon
    basic: {
        id: "basic",
        name: "Basic Cannon",

        // 발사 성능
        fire: {
            fireDelay: 200,   // 발사 간격(ms)
            energyCost: 1     // 사용 에너지
        },

        // 총알 스펙
        bullet: {
            radius: 8,           // 총알 크기
            drawR: 8,          // 이미지 크기
            sprite: "basic",       // 이미지 타입
            speed: 600,          // 이동 속도
            maxDistance: 900,    // 사거리
            damage: 6,           // 데미지
            hp: 20,              // 총알 체력
            bulletWeight: 0.05   // 총알 무게
        },

        // 반동
        recoil: 0.5,

        // 효과음
        sfx: "basic"
    },

    // #2 -------- Rapid Cannon
    rapid: {
        id: "rapid",
        name: "Rapid Cannon",

        // 발사 성능
        fire: {
            fireDelay: 100,  // 빠른 연사 속도
            energyCost: 0.5
        },

        // 총알 스펙
        bullet: {
            radius: 5,
            drawR: 5,
            sprite: "rapid",
            speed: 800,
            maxDistance: 1000,
            damage: 3,
            hp: 15,
            bulletWeight: 0.03
        },

        // 반동
        recoil: 0.3,

        // 효과음
        sfx: "rapid"
    },

    // #3 -------- Laser Beam
    laser: {
        id: "laser",
        name: "Laser Beam",

        // 발사 성능
        fire: {
            fireDelay: 450,
            energyCost: 3
        },

        // 총알 스펙
        bullet: {
            radius: 5,
            drawR: 25,
            sprite: "laser",
            speed: 1500,
            maxDistance: 2000,
            damage: 50,
            hp: 1,
            bulletWeight: 0.3
        },

        // 반동
        recoil: 0,

        // 효과음
        sfx: "laser"
    },

    // #4 -------- Mine Launcher
    mine: {
        id: "mine",
        name: "Mine Launcher",

        // 발사 성능
        fire: {
            fireDelay: 800,   // 발사 간격(ms)
            energyCost: 5     // 사용 에너지
        },

        // 총알 스펙
        bullet: {
            radius: 8,           // 총알 크기
            drawR: 8,          // 이미지 크기
            sprite: "mine",       // 이미지 타입
            speed: 1,          // 이동 속도(최소1)
            maxDistance: 12,    // 사거리
            damage: 4,           // 데미지
            hp: 100,              // 총알 체력
            bulletWeight: 0.2   // 총알 무게
        },

        // 반동
        recoil: 0.2,

        // 효과음
        sfx: "mine"
    }

};