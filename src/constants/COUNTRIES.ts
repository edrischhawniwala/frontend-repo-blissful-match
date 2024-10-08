export const countriesWithStatesAndCities: {
    country: string;
    states: {
        state: string;
        cities: string[];
    }[];
}[] = [
    {
        country: 'United States',
        states: [
            {
                state: 'California',
                cities: ['Los Angeles', 'San Francisco', 'San Diego'],
            },
            { state: 'Texas', cities: ['Houston', 'Dallas', 'Austin'] },
            { state: 'Florida', cities: ['Miami', 'Orlando', 'Tampa'] },
            {
                state: 'New York',
                cities: ['New York City', 'Buffalo', 'Rochester'],
            },
            {
                state: 'Illinois',
                cities: ['Chicago', 'Springfield', 'Naperville'],
            },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'Canada',
        states: [
            { state: 'Ontario', cities: ['Toronto', 'Ottawa', 'Mississauga'] },
            {
                state: 'British Columbia',
                cities: ['Vancouver', 'Victoria', 'Surrey'],
            },
            { state: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval'] },
            { state: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer'] },
            { state: 'Manitoba', cities: ['Winnipeg', 'Brandon', 'Steinbach'] },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'Australia',
        states: [
            {
                state: 'New South Wales',
                cities: ['Sydney', 'Newcastle', 'Wollongong'],
            },
            { state: 'Victoria', cities: ['Melbourne', 'Geelong', 'Ballarat'] },
            {
                state: 'Queensland',
                cities: ['Brisbane', 'Gold Coast', 'Cairns'],
            },
            {
                state: 'Western Australia',
                cities: ['Perth', 'Fremantle', 'Albany'],
            },
            {
                state: 'South Australia',
                cities: ['Adelaide', 'Mount Gambier', 'Whyalla'],
            },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'India',
        states: [
            { state: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
            { state: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli'] },
            {
                state: 'Tamil Nadu',
                cities: ['Chennai', 'Coimbatore', 'Madurai'],
            },
            {
                state: 'West Bengal',
                cities: ['Kolkata', 'Howrah', 'Darjeeling'],
            },
            { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Agra'] },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'United Kingdom',
        states: [
            {
                state: 'England',
                cities: ['London', 'Manchester', 'Birmingham'],
            },
            { state: 'Scotland', cities: ['Edinburgh', 'Glasgow', 'Aberdeen'] },
            { state: 'Wales', cities: ['Cardiff', 'Swansea', 'Newport'] },
            {
                state: 'Northern Ireland',
                cities: ['Belfast', 'Derry', 'Lisburn'],
            },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'Germany',
        states: [
            { state: 'Bavaria', cities: ['Munich', 'Nuremberg', 'Augsburg'] },
            { state: 'Berlin', cities: ['Berlin'] },
            {
                state: 'North Rhine-Westphalia',
                cities: ['Cologne', 'Düsseldorf', 'Dortmund'],
            },
            {
                state: 'Baden-Württemberg',
                cities: ['Stuttgart', 'Karlsruhe', 'Mannheim'],
            },
            { state: 'Hesse', cities: ['Frankfurt', 'Wiesbaden', 'Darmstadt'] },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'Brazil',
        states: [
            { state: 'São Paulo', cities: ['São Paulo', 'Campinas', 'Santos'] },
            {
                state: 'Rio de Janeiro',
                cities: ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
            },
            {
                state: 'Minas Gerais',
                cities: ['Belo Horizonte', 'Uberlândia', 'Ouro Preto'],
            },
            {
                state: 'Bahia',
                cities: ['Salvador', 'Feira de Santana', 'Ilhéus'],
            },
            { state: 'Paraná', cities: ['Curitiba', 'Londrina', 'Maringá'] },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'China',
        states: [
            { state: 'Beijing', cities: ['Beijing'] },
            { state: 'Shanghai', cities: ['Shanghai'] },
            { state: 'Guangdong', cities: ['Guangzhou', 'Shenzhen', 'Foshan'] },
            { state: 'Zhejiang', cities: ['Hangzhou', 'Ningbo', 'Wenzhou'] },
            { state: 'Sichuan', cities: ['Chengdu', 'Mianyang', 'Deyang'] },
            // Add more states and cities as needed
        ],
    },
    {
        country: 'Russia',
        states: [
            { state: 'Moscow', cities: ['Moscow'] },
            { state: 'Saint Petersburg', cities: ['Saint Petersburg'] },
            { state: 'Novosibirsk Oblast', cities: ['Novosibirsk', 'Berdsk'] },
            {
                state: 'Krasnodar Krai',
                cities: ['Krasnodar', 'Sochi', 'Novorossiysk'],
            },
            {
                state: 'Tatarstan',
                cities: ['Kazan', 'Naberezhnye Chelny', 'Almetyevsk'],
            },
            // Add more states and cities as needed
        ],
    },
    // Add more countries, states, and cities as needed
];

export const COUNTRIES: { country: string; states: string[] }[] = [
    {
        country: 'United States',
        states: [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ],
    },
    {
        country: 'Canada',
        states: [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Northwest Territories',
            'Nunavut',
            'Yukon',
        ],
    },
    {
        country: 'Australia',
        states: [
            'New South Wales',
            'Victoria',
            'Queensland',
            'South Australia',
            'Western Australia',
            'Tasmania',
            'Australian Capital Territory',
            'Northern Territory',
        ],
    },
    {
        country: 'India',
        states: [
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chhattisgarh',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal',
            'Andaman and Nicobar Islands',
            'Chandigarh',
            'Dadra and Nagar Haveli and Daman and Diu',
            'Lakshadweep',
            'Delhi',
            'Puducherry',
            'Ladakh',
            'Jammu and Kashmir',
        ],
    },
    {
        country: 'Germany',
        states: [
            'Baden-Württemberg',
            'Bavaria',
            'Berlin',
            'Brandenburg',
            'Bremen',
            'Hamburg',
            'Hesse',
            'Lower Saxony',
            'Mecklenburg-Vorpommern',
            'North Rhine-Westphalia',
            'Rhineland-Palatinate',
            'Saarland',
            'Saxony',
            'Saxony-Anhalt',
            'Schleswig-Holstein',
            'Thuringia',
        ],
    },
    {
        country: 'Brazil',
        states: [
            'Acre',
            'Alagoas',
            'Amapá',
            'Amazonas',
            'Bahia',
            'Ceará',
            'Distrito Federal',
            'Espírito Santo',
            'Goiás',
            'Maranhão',
            'Mato Grosso',
            'Mato Grosso do Sul',
            'Minas Gerais',
            'Pará',
            'Paraíba',
            'Paraná',
            'Pernambuco',
            'Piauí',
            'Rio de Janeiro',
            'Rio Grande do Norte',
            'Rio Grande do Sul',
            'Rondônia',
            'Roraima',
            'Santa Catarina',
            'São Paulo',
            'Sergipe',
            'Tocantins',
        ],
    },
    {
        country: 'United Kingdom',
        states: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    },
    {
        country: 'China',
        states: [
            'Anhui',
            'Beijing',
            'Chongqing',
            'Fujian',
            'Gansu',
            'Guangdong',
            'Guangxi',
            'Guizhou',
            'Hainan',
            'Hebei',
            'Heilongjiang',
            'Henan',
            'Hong Kong',
            'Hubei',
            'Hunan',
            'Inner Mongolia',
            'Jiangsu',
            'Jiangxi',
            'Jilin',
            'Liaoning',
            'Macau',
            'Ningxia',
            'Qinghai',
            'Shaanxi',
            'Shandong',
            'Shanghai',
            'Shanxi',
            'Sichuan',
            'Tianjin',
            'Tibet',
            'Xinjiang',
            'Yunnan',
            'Zhejiang',
        ],
    },
    {
        country: 'Russia',
        states: [
            'Adygea',
            'Altai',
            'Amur',
            'Arkhangelsk',
            'Astrakhan',
            'Bashkortostan',
            'Belgorod',
            'Bryansk',
            'Buryatia',
            'Chechnya',
            'Chelyabinsk',
            'Chukotka',
            'Chuvashia',
            'Dagestan',
            'Ingushetia',
            'Irkutsk',
            'Ivanovo',
            'Jewish Autonomous Oblast',
            'Kabardino-Balkaria',
            'Kaliningrad',
            'Kalmykia',
            'Kaluga',
            'Kamchatka',
            'Karachay-Cherkessia',
            'Karelia',
            'Kemerovo',
            'Khabarovsk',
            'Khakassia',
            'Khanty-Mansi',
            'Kirov',
            'Komi',
            'Kostroma',
            'Krasnodar',
            'Krasnoyarsk',
            'Kurgan',
            'Kursk',
            'Leningrad',
            'Lipetsk',
            'Magadan',
            'Mari El',
            'Mordovia',
            'Moscow',
            'Murmansk',
            'Nenets',
            'Nizhny Novgorod',
            'Novgorod',
            'Novosibirsk',
            'Omsk',
            'Orenburg',
            'Oryol',
            'Penza',
            'Perm',
            'Primorsky',
            'Pskov',
            'Rostov',
            'Ryazan',
            'Saint Petersburg',
            'Sakha',
            'Sakhalin',
            'Samara',
            'Saratov',
            'Smolensk',
            'Stavropol',
            'Sverdlovsk',
            'Tambov',
            'Tatarstan',
            'Tomsk',
            'Tula',
            'Tver',
            'Tyumen',
            'Udmurtia',
            'Ulyanovsk',
            'Vladimir',
            'Volgograd',
            'Vologda',
            'Voronezh',
            'Yamalo-Nenets',
            'Yaroslavl',
            'Zabaykalsky',
        ],
    },
];

export const COUNTRIES_WITHOUT_STATES: { key: string; value: string }[] = [
    { key: 'UnitedStates', value: 'United States' },
    { key: 'Canada', value: 'Canada' },
    { key: 'Brazil', value: 'Brazil' },
    { key: 'UnitedKingdom', value: 'United Kingdom' },
    { key: 'Germany', value: 'Germany' },
    { key: 'France', value: 'France' },
    { key: 'Italy', value: 'Italy' },
    { key: 'Spain', value: 'Spain' },
    { key: 'Russia', value: 'Russia' },
    { key: 'China', value: 'China' },
    { key: 'India', value: 'India' },
    { key: 'Japan', value: 'Japan' },
    { key: 'Australia', value: 'Australia' },
    { key: 'SouthKorea', value: 'South Korea' },
    { key: 'Mexico', value: 'Mexico' },
    { key: 'Indonesia', value: 'Indonesia' },
    { key: 'SaudiArabia', value: 'Saudi Arabia' },
    { key: 'SouthAfrica', value: 'South Africa' },
    { key: 'Nigeria', value: 'Nigeria' },
    { key: 'Egypt', value: 'Egypt' },
    { key: 'Turkey', value: 'Turkey' },
    { key: 'Argentina', value: 'Argentina' },
    { key: 'Netherlands', value: 'Netherlands' },
    { key: 'Sweden', value: 'Sweden' },
    { key: 'Switzerland', value: 'Switzerland' },
    { key: 'Belgium', value: 'Belgium' },
    { key: 'Norway', value: 'Norway' },
    { key: 'Denmark', value: 'Denmark' },
    { key: 'Greece', value: 'Greece' },
    { key: 'Portugal', value: 'Portugal' },
    { key: 'Poland', value: 'Poland' },
    { key: 'Ukraine', value: 'Ukraine' },
    { key: 'Thailand', value: 'Thailand' },
    { key: 'Vietnam', value: 'Vietnam' },
    { key: 'Malaysia', value: 'Malaysia' },
    { key: 'Philippines', value: 'Philippines' },
    { key: 'Singapore', value: 'Singapore' },
    { key: 'NewZealand', value: 'New Zealand' },
    { key: 'Israel', value: 'Israel' },
    { key: 'Iran', value: 'Iran' },
    { key: 'Iraq', value: 'Iraq' },
    { key: 'Afghanistan', value: 'Afghanistan' },
    { key: 'Pakistan', value: 'Pakistan' },
    { key: 'Bangladesh', value: 'Bangladesh' },
    { key: 'SriLanka', value: 'Sri Lanka' },
    { key: 'Nepal', value: 'Nepal' },
    { key: 'Bhutan', value: 'Bhutan' },
    { key: 'Maldives', value: 'Maldives' },
    { key: 'Myanmar', value: 'Myanmar' },
    { key: 'Kazakhstan', value: 'Kazakhstan' },
];
