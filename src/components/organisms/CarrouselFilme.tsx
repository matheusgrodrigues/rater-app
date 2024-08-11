interface CarrouselFilmeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CarrouselFilme({ ...props }: CarrouselFilmeProps) {
    return (
        <div {...props}>
            <>CarrouselFilme</>
        </div>
    );
}
