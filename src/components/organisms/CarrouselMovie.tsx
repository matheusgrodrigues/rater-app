interface CarrouselMovieProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CarrouselMovie({ ...props }: CarrouselMovieProps) {
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
