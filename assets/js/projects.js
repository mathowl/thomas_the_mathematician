$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/micrograph_cell_wall.png',
            link: 'https://www.sciencedirect.com/science/article/pii/S002251932030045X',
            title: 'Modelling fungal tip growth',
            demo: false,
            technologies: ['Math', 'Biology', 'Matlab'],
            description: "Tip growth is growth of singular cell in a single direction. A novel model for fungal tip growth is formulated using bio-mechanics.",
            categories: ['featured', 'applied math']
        },

        {
            image: 'assets/images/token_hive.png',
            link: 'https://github.com/mathowl/hive_token_prices',
            title: 'Subchain token prices',
            demo: false,
            technologies: ['Python', 'Crypto'],
            description: "Subchain tokens can be deployed in a closed eco-system. The subchain token prices are evaluated in terms of exchange prices.",
            categories: ['python', 'data science']
        },

        {
            image: 'assets/images/VPN.png',
            link: 'https://github.com/mathowl/express_VPN',
            title: 'ExpressVPN cycler',
            demo: false,
            technologies: ['Python', 'VPN'],
            description: "ExpressVPN cannot actively cycle through different VPN locations. This code cycles through ExpressVPN locations until connection is established",
            categories: ['coding']
        },

        {
            image: 'assets/images/tinder.png',
            link: '#',
            title: 'Tinder data analysis',
            demo: false,
            technologies: ['Python', 'Social science','Statistics'],
            description: "Anomized data repo, comparing user data to user experience (In preparation)",
            categories: ['featured','coding', 'applied math','data science']
        },

        
        {
            image: 'assets/images/archeo.png',
            link: '#',
            title: 'Fire-discovery during midpleistoscene',
            demo: false,
            technologies: ['Python', 'Archeology','Statistics'],
            description: "Mapping spread of fire use by interpolating archeological sites (In preparation)",
            categories: ['featured','coding', 'applied math','data science']
        },

        {
            image:  'assets/images/donor.png',
            link: 'https://link.springer.com/chapter/10.1007/978-3-030-53006-8_7',
            title: 'Donor cell encapsulation for Diabetes type 1',
            demo: false,
            technologies: ['Biology', 'Differential equations'],
            description: "Mathematical model for encapsulating insulin producing cells to treat Diabetes type 1",
            categories: ['featured','applied math']
        },

        {
            image: 'assets/images/raspi.png',
            link: 'https://peakd.com/@mathowl/raspberry-pi-it-is-b-1555279399',
            title: 'Raspi Hive-bot',
            demo: false,
            technologies: ['Python','Linux'],
            description: "Raspi-bot for the hive-blockchain: auto-upvotes, memo-searches, post owl memes on request^^",
            categories: ['coding', 'python','AI']
        },

        {
            image:  'assets/images/Chickentrain.png',
            link: ' https://www.swi-wiskunde.nl/swi2016/problems/marel-stork-chilling-on-the-chicken-express/',
            title: 'Poultry processing chain tension control',
            demo: false,
            technologies: ['Math','Industry'],
            description: "Low tension can cause mechanical failure and high tension reduces life-time of chain. A mechanical model is derived for maintaining optimal tension in a poultry processing line",
            categories: ['applied math']
        },

        {
            image:  'assets/images/svg.png',
            link: 'https://www.researchgate.net/publication/352248059_Preservation_of_vector_graphical_representation_classes_for_generative_neural_nets',
            title: 'Vector graphics and neural nets',
            demo: false,
            technologies: ['AI','Math','Python'],
            description: "Finding properties that are preserved when neural nets generate vector graphics",
            categories: ['applied math', 'coding','AI']
        },
        
                {
            image:  'assets/images/axsym.jpg',
            link: 'https://link.springer.com/article/10.1007/s10440-022-00517-7',
            title: 'Uniqueness of Local, Analytic Solutions to Singular ODEs',
            demo: false,
            technologies: ['Math'],
            description: "Existence, uniqueness of local, analytic solutions for a class of initial value problems for singular ODEs under a certain non-resonance condition.",
            categories: ['applied math']
        }

    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
