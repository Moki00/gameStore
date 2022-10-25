
export class GameService {

    public async getAllGames(): Promise<any> {
        const response = await fetch('/api/games');
        return await response.json();
    }

    public async createGame(data: any): Promise<any> {
        
        const response = await fetch(`/api/game`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({game: data})
        })
        return await response.json();
    }

    public async deleteGame(gameId: number): Promise<any> {
        const response = await fetch(`/api/game/${gameId}`, {method: 'DELETE'})
        return await response.json();
    }

    public async editGame(data: any): Promise<any> {
        const response = await fetch(`/api/game`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({game: data})
        })
        return await response.json();
    }
}