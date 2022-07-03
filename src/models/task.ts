import { Table,Model, Column } from 'sequelize-typescript'

@Table
export class Task extends Model {
    @Column
    creator: string

    @Column
    quest_id: string
    
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

    @Column
    previous_task_id: string
    
}