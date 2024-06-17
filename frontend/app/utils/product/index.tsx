import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type PizzaProps = {
    size: string;
    flavor: string;
    flavor_image: string;
    border: boolean;
    border_flavor?: string | null;
    price: string;
}

export const Pizza = (props: PizzaProps) => {
    return (
        <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}