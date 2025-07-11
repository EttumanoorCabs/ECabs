import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Car } from "@/types/types";


export default function CarCard (data:Car) {
    return(
        <section>
            <div>
                <div><Image src={data.image} alt={""}height={100} width={100}/></div>
                <h3>{data.name}</h3>
                <p>{data.shorDescription}</p>
            </div>
        </section>
    )
}