import { generateId } from '@/util/idGenerator';
import { InKinkCategory } from '../types/kinks';
import { Rating } from '../types/ratings';

export const getDefaultRatings = (): Rating[] => [
    { name: 'No comment', color: '#FFF' },
    { name: 'Very yes', color: '#6DB5FE' },
    { name: 'Yes', color: '#23FD22' },
    { name: 'Neutral', color: '#FDFD6B' },
    { name: 'Maybe', color: '#DB6C00' },
    { name: 'No', color: '#920000' },
];

const createKinkCategory = (name: string, subcategories: string[], kinks: string[], defaultRating: string): InKinkCategory => ({
    id: generateId(),
    name,
    subcategories,
    kinks: kinks.map((kinkname) => ({
        id: generateId(),
        name: kinkname,
        ratings: subcategories.reduce((map: Record<string, string>, subcategory: string) => ({ ...map, [subcategory]: defaultRating }), {}),
    })),
});

export const getDefaultKinkContent = (defaultRating: string): InKinkCategory[] => [
    createKinkCategory("Body types", ["General"], ["Slim", "Average", "Curvy", "Athletic", "Very muscular", "Hairy"], defaultRating),
    createKinkCategory("Clothing", ["Self", "Partner"], ["Clothed sex", "Lingerie", "Stockings", "Heels", "Leather", "Latex", "Uniform / costume"], defaultRating),
    createKinkCategory("Partners", ["General"], ["One partner", "Two partners", "Three partners", "More than three partners"], defaultRating),
    createKinkCategory("Actions", ["Giving", "Receiving"], ["Light kisses", "Deep kisses", "Hickey", "Biting", "Suckling", "Oral", "Deep throat", "Fingers in mouth", "Gentle caress", "Massage", "Tight grip", "Handjob / fingering", "Footjob", "Clothing job"], defaultRating),
    createKinkCategory("Ass play", ["Giving", "Receiving"], ["Anal toys", "Penetration", "Oral", "Fisting"], defaultRating),
    createKinkCategory("Restrictive", ["Self", "Partner"], ["Blindfold", "Gag", "Collar", "Leash", "Rope", "Handcuffs", "Ankle cuffs", "Chastity", "Heavily restrained overall"], defaultRating),
    createKinkCategory("Toys", ["Self", "Partner"], ["Dildos", "Plugs", "Vibrators", "Sounding"], defaultRating),
    createKinkCategory("Domination", ["Self", "Partner"], ["Dominant", "Submissive", "Servitude", "Pet play", "Discipline", "Begging", "Orgasm control", "Choking"], defaultRating),
    createKinkCategory("Fluids", ["General"], ["Cum", "Lactation", "Watersports", "Blood"], defaultRating),
    createKinkCategory("Communication", ["Giving", "Receiving"], ["Praise", "Worship", "Degradation", "Objectification"], defaultRating),
    createKinkCategory("Stimulation", ["Self", "Partner"], ["Cold", "Heat", "Tickling", "Electricity"], defaultRating),
    createKinkCategory("Scenario", ["General"], ["Orgy", "Public exposure", "Hidden in public", "Impregnation", "Pregnancy", "Cuckold / Cuckquean", "Consensual non-consent"], defaultRating),
    createKinkCategory("Pain", ["Giving", "Receiving"], ["Pinching with hands", "Clamps", "Spanking", "Whipping", "Hot Wax", "Scratching", "Cutting"], defaultRating),
]