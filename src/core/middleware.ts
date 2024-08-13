interface RequestProps {
    method: string;
    url: string;
    body?: string;
}

const Middleware = {
    request: async ({ method, body, url }: RequestProps) => {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN_AUTH}`,
                },
                method,
                body,
            });

            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default Middleware;
