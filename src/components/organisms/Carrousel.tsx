interface CarrouselProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Carrousel({ ...props }: CarrouselProps) {
    return (
        <div
            style={{
                width: '100%',
            }}
            {...props}
        >
            <>CarrouselFilme</>
        </div>
    );
}
