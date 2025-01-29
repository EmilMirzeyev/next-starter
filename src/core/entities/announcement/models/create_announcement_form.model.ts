export type CreateAnnouncementFormModel = {
    brand: number | null;
    banType: number | null;
    year: number | null;
    price: number | null;
    color: number | null;
    gear: number | null;
    capacity: number | null;
    mileage: number | null;
    numberOfOwners: number | null;
    marketType: number | null;
    model: number | null;
    city: number | null;
    status: number | null;
    currency: number | null;
    barter: boolean;
    credit: boolean;
    fuelType: number | null;
    gearbox: number | null;
    horsePower: string;
    notRepainted: boolean;
    hasNoDamage: boolean;
    numberOfSeats: number | null;
    onSale: boolean;
    byOrder: boolean;
    alloyWheels: boolean;
    abs: boolean;
    sunRoof: boolean;
    centralLockingSystem: boolean;
    xenonLamps: boolean;
    rainSensor: boolean;
    sideCurtains: boolean;
    leatherInterior: boolean;
    parkingRadar: boolean;
    rearCamera: boolean;
    seatVentilation: boolean;
    additionalInfo: string;
    carPhotos: FileList[]
}