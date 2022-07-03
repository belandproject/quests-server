import { Table,Model, Column } from 'sequelize-typescript'

@Table
export class Quest extends Model {
    @Column
    creator: string
    
    @Column
    name: string

    @Column
    description: string

    @Column
    imageUrl: string

    @Column
    bannerUrl: string

    @Column
    requirements: any
}