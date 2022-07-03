import { Table,Model, Column } from 'sequelize-typescript'

@Table
export class Reward extends Model {
    @Column
    creator: string

    @Column
    type: string
    
    @Column
    name: string

    @Column
    description: string

    @Column
    imageUrl: string

    @Column
    serverBaseUrl: string

    @Column
    params: any
}