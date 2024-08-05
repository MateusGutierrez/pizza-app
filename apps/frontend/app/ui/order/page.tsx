"use client"

import OrderComponent from "@/app/utils/order"

export default function Order() {
    return (
        <div className="min-h-[80vh] w-[60%] flex m-auto justify-between items-start">
            <OrderComponent />
        </div>
    )
}