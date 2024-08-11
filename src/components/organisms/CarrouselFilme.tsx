interface CarrouselFilmeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CarrouselFilme({ ...props }: CarrouselFilmeProps) {
    return (
        <div
            style={{
                background: 'yellow',
                width: '100%',
                maxWidth: '380px',
            }}
            {...props}
        >
            <>CarrouselFilme</>
        </div>
    );
}
