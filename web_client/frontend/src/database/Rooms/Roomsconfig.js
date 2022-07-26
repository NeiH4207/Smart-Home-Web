import React from 'react';
import {rooms} from "./Rooms";

export const LivingRoom = `${process.env.PUBLIC_URL}/image/living_room.jpg`;
export const BedRoom = `${process.env.PUBLIC_URL}/image/bed_room.jpg`;
export const KitchenRoom = `${process.env.PUBLIC_URL}/image/kitchen_room.jpeg`;
export const StudyRoom = `${process.env.PUBLIC_URL}/image/study_room.jpg`;
// export const BalconyRoom = `${process.env.PUBLIC_URL}/image/balcony_room.jpg`;

export const roomList = rooms;

export const imageRoom = new Map();
imageRoom.set('LivingRoom', LivingRoom);
imageRoom.set('BedRoom',BedRoom);
imageRoom.set('KitchenRoom',KitchenRoom);
imageRoom.set('StudyRoom',StudyRoom);
// imageRoom.set('BalconyRoom', BalconyRoom);