let planets = [
    {
        name: 'Mercury',
        class: 'planet',
        color: 'orange',
        moons: null
    },
    {
        name: 'Venus',
        class: 'planet',
        color: 'darkorange',
        moons: null
    },
    {
        name: 'Earth',
        class: 'planet',
        color: 'blue',
        moons: [
            {
            name: 'Moon',
            class: 'moon',
            color: 'darkgrey'
            }
            ]
    },
    {
        name: 'Mars',
        class: 'planet',
        color: 'red',
        moons: [
            {
            name: 'Moon',
            class: 'moon',
            color: 'darkgrey'
            },
            {
            name: 'Moon',
            class: 'moon',
            color: 'darkgrey'
            }
            ]
    },
    {
        name: 'Jupiter',
        class: 'planet',
        color: 'peachpuff',
        moons: [
            {
                name: 'Io',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Europa',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Ganymede',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Callisto',
                class: 'moon',
                color: 'darkgrey'
            }
        ]
    },
    {
        name: 'Saturn',
        class: 'planet',
        color: 'bisque',
        moons: [
            {
                name: 'Enceladus',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Titan',
                class: 'moon',
                color: 'darkgrey'
            }
        ]
    },
    {
        name: 'Uranus',
        class: 'planet',
        color: 'blue',
        moons: [
            {
                name: 'Ariel',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Oberon',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Puck',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Rosalind',
                class: 'moon',
                color: 'darkgrey'
            }
        ]
    },
    {
        name: 'Neptune',
        class: 'planet',
        color: 'darkblue',
        moons: [
            {
                name: 'Galatea',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Hippocamp',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Larissa',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Naiad',
                class: 'moon',
                color: 'darkgrey'
            }
        ]
    },
    {
        name: 'Pluto',
        class: 'planet',
        color: 'sandybrown',
        moons: [
            {
                name: 'Charon',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Hydra',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Kerberos',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Nix',
                class: 'moon',
                color: 'darkgrey'
            },
            {
                name: 'Styx',
                class: 'moon',
                color: 'darkgrey'
            },
        ]
    },
]

let planet_margin = 0;

for (let planet of planets) {
    let planet_div = document.createElement('div');
    let planet_name = document.createTextNode(planet.name);
    planet_div.style.background = planet.color;
    planet_div.style.marginTop = `${planet_margin}px`;
    planet_div.classList.add(planet.class);
    planet_div.appendChild(planet_name);
    planet_margin += 20;
    let moon_margin = 140;
    if (planet.moons !== null) {
        for (let moon of planet.moons) {
            let moon_div = document.createElement('div');
            moon_div.style.background = moon.color;
            moon_div.style.marginLeft = `${moon_margin}px`
            moon_margin += 50;
            moon_div.classList.add(moon.class)
            planet_div.appendChild(moon_div);
        }
    }
    document.getElementsByClassName('listPlanets')[0].appendChild(planet_div)
}