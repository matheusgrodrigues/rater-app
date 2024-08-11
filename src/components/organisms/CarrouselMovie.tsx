interface CarrouselMovieProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CarrouselMovie({ ...props }: CarrouselMovieProps) {
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
