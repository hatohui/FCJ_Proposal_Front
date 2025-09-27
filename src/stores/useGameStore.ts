import { create } from 'zustand'
import { io, Socket } from 'socket.io-client'

interface Player {
	id: string
	name: string
	progress: number
}

interface GameConfig {
	words: string[]
	duration: number
}

interface GameState {
	socket: Socket | null
	roomId: string | null
	players: Player[]
	config: GameConfig | null
	connected: boolean

	connect: () => void
	createRoom: () => void
	joinRoom: (roomId: string, name: string) => void
	updateProgress: (progress: number) => void
}

export const useGameStore = create<GameState>((set, get) => ({
	socket: null,
	roomId: null,
	players: [],
	config: null,
	connected: false,

	connect: () => {
		if (get().socket) return
		const socket = io('http://localhost:3000')
		set({ socket })

		socket.on('connect', () => {
			set({ connected: true, socket })
		})

		socket.on('roomCreated', (roomId: string, config: GameConfig) => {
			set({ roomId, config })
		})

		socket.on(
			'roomJoined',
			(roomId: string, players: Player[], config: GameConfig) => {
				set({ roomId, players, config })
			}
		)

		socket.on('playerUpdate', (players: Player[]) => {
			set({ players })
		})

		socket.on('disconnect', () => {
			set({ connected: false, roomId: null, players: [], config: null })
		})
	},

	createRoom: () => {
		get().socket?.emit('createRoom')
	},

	joinRoom: (roomId: string, name: string) => {
		get().socket?.emit('joinRoom', { roomId, name })
	},

	updateProgress: (progress: number) => {
		get().socket?.emit('updateProgress', progress)
	},
}))
