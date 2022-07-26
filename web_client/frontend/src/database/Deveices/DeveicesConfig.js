import React from 'react';
import {Deveices} from './Deveices';
import { FaLightbulb, FaTemperatureHigh} from "react-icons/fa";
import {GiBedLamp, GiComputerFan, GiFireplace, GiPadlock} from "react-icons/gi";
import {SiApacheairflow, } from "react-icons/si";
import {BiChip, } from "react-icons/bi";
import {WiHumidity, } from "react-icons/wi";

export const deveiceList = Deveices;

export const icon = new Map();
icon.set('light', <FaLightbulb size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('pan', <GiComputerFan size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('lamp', <GiBedLamp size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('air', <SiApacheairflow size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('chip', <BiChip size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('fire', <GiFireplace size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('lock', <GiPadlock size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('temperature', <FaTemperatureHigh size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
icon.set('humidifer', <WiHumidity size={100} style={{marginTop: '10px', marginBottom: '10px'}} />)
