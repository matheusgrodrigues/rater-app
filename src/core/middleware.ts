interface RequestProps {
    url: string;
    method?: string;
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
                method: method ?? 'GET',
                body,
            });

            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default Middleware;
