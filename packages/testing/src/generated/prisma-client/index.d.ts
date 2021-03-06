import { DocumentNode } from "graphql";
import { BaseClientOptions, Model } from "prisma-client-lib";
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export interface Exists {
    board: (where?: BoardWhereInput) => Promise<boolean>;
    post: (where?: PostWhereInput) => Promise<boolean>;
    thread: (where?: ThreadWhereInput) => Promise<boolean>;
    user: (where?: UserWhereInput) => Promise<boolean>;
}
export interface Node {
}
export declare type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;
export interface Fragmentable {
    $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}
export interface Prisma {
    $exists: Exists;
    $graphql: <T = any>(query: string, variables?: {
        [key: string]: any;
    }) => Promise<T>;
    /**
     * Queries
     */
    board: (where: BoardWhereUniqueInput) => BoardPromise;
    boards: (args?: {
        where?: BoardWhereInput;
        orderBy?: BoardOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Board>;
    boardsConnection: (args?: {
        where?: BoardWhereInput;
        orderBy?: BoardOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => BoardConnectionPromise;
    post: (where: PostWhereUniqueInput) => PostPromise;
    posts: (args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Post>;
    postsConnection: (args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => PostConnectionPromise;
    thread: (where: ThreadWhereUniqueInput) => ThreadPromise;
    threads: (args?: {
        where?: ThreadWhereInput;
        orderBy?: ThreadOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Thread>;
    threadsConnection: (args?: {
        where?: ThreadWhereInput;
        orderBy?: ThreadOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ThreadConnectionPromise;
    user: (where: UserWhereUniqueInput) => UserPromise;
    users: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<User>;
    usersConnection: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => UserConnectionPromise;
    node: (args: {
        id: ID_Output;
    }) => Node;
    /**
     * Mutations
     */
    createBoard: (data: BoardCreateInput) => BoardPromise;
    updateBoard: (args: {
        data: BoardUpdateInput;
        where: BoardWhereUniqueInput;
    }) => BoardPromise;
    upsertBoard: (args: {
        where: BoardWhereUniqueInput;
        create: BoardCreateInput;
        update: BoardUpdateInput;
    }) => BoardPromise;
    deleteBoard: (where: BoardWhereUniqueInput) => BoardPromise;
    deleteManyBoards: (where?: BoardWhereInput) => BatchPayloadPromise;
    createPost: (data: PostCreateInput) => PostPromise;
    updatePost: (args: {
        data: PostUpdateInput;
        where: PostWhereUniqueInput;
    }) => PostPromise;
    updateManyPosts: (args: {
        data: PostUpdateManyMutationInput;
        where?: PostWhereInput;
    }) => BatchPayloadPromise;
    upsertPost: (args: {
        where: PostWhereUniqueInput;
        create: PostCreateInput;
        update: PostUpdateInput;
    }) => PostPromise;
    deletePost: (where: PostWhereUniqueInput) => PostPromise;
    deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
    createThread: (data: ThreadCreateInput) => ThreadPromise;
    updateThread: (args: {
        data: ThreadUpdateInput;
        where: ThreadWhereUniqueInput;
    }) => ThreadPromise;
    updateManyThreads: (args: {
        data: ThreadUpdateManyMutationInput;
        where?: ThreadWhereInput;
    }) => BatchPayloadPromise;
    upsertThread: (args: {
        where: ThreadWhereUniqueInput;
        create: ThreadCreateInput;
        update: ThreadUpdateInput;
    }) => ThreadPromise;
    deleteThread: (where: ThreadWhereUniqueInput) => ThreadPromise;
    deleteManyThreads: (where?: ThreadWhereInput) => BatchPayloadPromise;
    createUser: (data: UserCreateInput) => UserPromise;
    updateUser: (args: {
        data: UserUpdateInput;
        where: UserWhereUniqueInput;
    }) => UserPromise;
    updateManyUsers: (args: {
        data: UserUpdateManyMutationInput;
        where?: UserWhereInput;
    }) => BatchPayloadPromise;
    upsertUser: (args: {
        where: UserWhereUniqueInput;
        create: UserCreateInput;
        update: UserUpdateInput;
    }) => UserPromise;
    deleteUser: (where: UserWhereUniqueInput) => UserPromise;
    deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
    /**
     * Subscriptions
     */
    $subscribe: Subscription;
}
export interface Subscription {
    board: (where?: BoardSubscriptionWhereInput) => BoardSubscriptionPayloadSubscription;
    post: (where?: PostSubscriptionWhereInput) => PostSubscriptionPayloadSubscription;
    thread: (where?: ThreadSubscriptionWhereInput) => ThreadSubscriptionPayloadSubscription;
    user: (where?: UserSubscriptionWhereInput) => UserSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
/**
 * Types
 */
export declare type UserOrderByInput = "id_ASC" | "id_DESC" | "nationality_ASC" | "nationality_DESC" | "email_ASC" | "email_DESC" | "name_ASC" | "name_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type PostOrderByInput = "id_ASC" | "id_DESC" | "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "published_ASC" | "published_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type ThreadOrderByInput = "id_ASC" | "id_DESC" | "createdAt_ASC" | "createdAt_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type BoardOrderByInput = "id_ASC" | "id_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
export declare type BoardWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export interface UserWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    nationality?: String;
    nationality_not?: String;
    nationality_in?: String[] | String;
    nationality_not_in?: String[] | String;
    nationality_lt?: String;
    nationality_lte?: String;
    nationality_gt?: String;
    nationality_gte?: String;
    nationality_contains?: String;
    nationality_not_contains?: String;
    nationality_starts_with?: String;
    nationality_not_starts_with?: String;
    nationality_ends_with?: String;
    nationality_not_ends_with?: String;
    email?: String;
    email_not?: String;
    email_in?: String[] | String;
    email_not_in?: String[] | String;
    email_lt?: String;
    email_lte?: String;
    email_gt?: String;
    email_gte?: String;
    email_contains?: String;
    email_not_contains?: String;
    email_starts_with?: String;
    email_not_starts_with?: String;
    email_ends_with?: String;
    email_not_ends_with?: String;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    posts_every?: PostWhereInput;
    posts_some?: PostWhereInput;
    posts_none?: PostWhereInput;
    AND?: UserWhereInput[] | UserWhereInput;
    OR?: UserWhereInput[] | UserWhereInput;
    NOT?: UserWhereInput[] | UserWhereInput;
}
export interface PostWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    author?: UserWhereInput;
    content?: String;
    content_not?: String;
    content_in?: String[] | String;
    content_not_in?: String[] | String;
    content_lt?: String;
    content_lte?: String;
    content_gt?: String;
    content_gte?: String;
    content_contains?: String;
    content_not_contains?: String;
    content_starts_with?: String;
    content_not_starts_with?: String;
    content_ends_with?: String;
    content_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    published?: Boolean;
    published_not?: Boolean;
    title?: String;
    title_not?: String;
    title_in?: String[] | String;
    title_not_in?: String[] | String;
    title_lt?: String;
    title_lte?: String;
    title_gt?: String;
    title_gte?: String;
    title_contains?: String;
    title_not_contains?: String;
    title_starts_with?: String;
    title_not_starts_with?: String;
    title_ends_with?: String;
    title_not_ends_with?: String;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: PostWhereInput[] | PostWhereInput;
    OR?: PostWhereInput[] | PostWhereInput;
    NOT?: PostWhereInput[] | PostWhereInput;
}
export interface ThreadWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    author?: UserWhereInput;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    entry?: PostWhereInput;
    replies_every?: PostWhereInput;
    replies_some?: PostWhereInput;
    replies_none?: PostWhereInput;
    AND?: ThreadWhereInput[] | ThreadWhereInput;
    OR?: ThreadWhereInput[] | ThreadWhereInput;
    NOT?: ThreadWhereInput[] | ThreadWhereInput;
}
export interface BoardWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    admins_every?: UserWhereInput;
    admins_some?: UserWhereInput;
    admins_none?: UserWhereInput;
    members_every?: UserWhereInput;
    members_some?: UserWhereInput;
    members_none?: UserWhereInput;
    threads_every?: ThreadWhereInput;
    threads_some?: ThreadWhereInput;
    threads_none?: ThreadWhereInput;
    AND?: BoardWhereInput[] | BoardWhereInput;
    OR?: BoardWhereInput[] | BoardWhereInput;
    NOT?: BoardWhereInput[] | BoardWhereInput;
}
export declare type PostWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export declare type ThreadWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export declare type UserWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export interface BoardCreateInput {
    admins?: UserCreateManyInput;
    members?: UserCreateManyInput;
    threads?: ThreadCreateManyInput;
}
export interface UserCreateManyInput {
    create?: UserCreateInput[] | UserCreateInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}
export interface UserCreateInput {
    nationality?: String;
    email: String;
    name?: String;
    posts?: PostCreateManyWithoutAuthorInput;
}
export interface PostCreateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
    connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}
export interface PostCreateWithoutAuthorInput {
    content?: String;
    published: Boolean;
    title: String;
}
export interface ThreadCreateManyInput {
    create?: ThreadCreateInput[] | ThreadCreateInput;
    connect?: ThreadWhereUniqueInput[] | ThreadWhereUniqueInput;
}
export interface ThreadCreateInput {
    author: UserCreateOneInput;
    name: String;
    entry: PostCreateOneInput;
    replies?: PostCreateManyInput;
}
export interface UserCreateOneInput {
    create?: UserCreateInput;
    connect?: UserWhereUniqueInput;
}
export interface PostCreateOneInput {
    create?: PostCreateInput;
    connect?: PostWhereUniqueInput;
}
export interface PostCreateInput {
    author: UserCreateOneWithoutPostsInput;
    content?: String;
    published: Boolean;
    title: String;
}
export interface UserCreateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserCreateWithoutPostsInput {
    nationality?: String;
    email: String;
    name?: String;
}
export interface PostCreateManyInput {
    create?: PostCreateInput[] | PostCreateInput;
    connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}
export interface BoardUpdateInput {
    admins?: UserUpdateManyInput;
    members?: UserUpdateManyInput;
    threads?: ThreadUpdateManyInput;
}
export interface UserUpdateManyInput {
    create?: UserCreateInput[] | UserCreateInput;
    update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput;
    upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput;
    delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    set?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
    updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput;
}
export interface UserUpdateWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput;
    data: UserUpdateDataInput;
}
export interface UserUpdateDataInput {
    nationality?: String;
    email?: String;
    name?: String;
    posts?: PostUpdateManyWithoutAuthorInput;
}
export interface PostUpdateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
    delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    set?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput;
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput;
    deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput;
    updateMany?: PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput;
}
export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    data: PostUpdateWithoutAuthorDataInput;
}
export interface PostUpdateWithoutAuthorDataInput {
    content?: String;
    published?: Boolean;
    title?: String;
}
export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAuthorDataInput;
    create: PostCreateWithoutAuthorInput;
}
export interface PostScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    content?: String;
    content_not?: String;
    content_in?: String[] | String;
    content_not_in?: String[] | String;
    content_lt?: String;
    content_lte?: String;
    content_gt?: String;
    content_gte?: String;
    content_contains?: String;
    content_not_contains?: String;
    content_starts_with?: String;
    content_not_starts_with?: String;
    content_ends_with?: String;
    content_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    published?: Boolean;
    published_not?: Boolean;
    title?: String;
    title_not?: String;
    title_in?: String[] | String;
    title_not_in?: String[] | String;
    title_lt?: String;
    title_lte?: String;
    title_gt?: String;
    title_gte?: String;
    title_contains?: String;
    title_not_contains?: String;
    title_starts_with?: String;
    title_not_starts_with?: String;
    title_ends_with?: String;
    title_not_ends_with?: String;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: PostScalarWhereInput[] | PostScalarWhereInput;
    OR?: PostScalarWhereInput[] | PostScalarWhereInput;
    NOT?: PostScalarWhereInput[] | PostScalarWhereInput;
}
export interface PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput;
    data: PostUpdateManyDataInput;
}
export interface PostUpdateManyDataInput {
    content?: String;
    published?: Boolean;
    title?: String;
}
export interface UserUpsertWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput;
    update: UserUpdateDataInput;
    create: UserCreateInput;
}
export interface UserScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    nationality?: String;
    nationality_not?: String;
    nationality_in?: String[] | String;
    nationality_not_in?: String[] | String;
    nationality_lt?: String;
    nationality_lte?: String;
    nationality_gt?: String;
    nationality_gte?: String;
    nationality_contains?: String;
    nationality_not_contains?: String;
    nationality_starts_with?: String;
    nationality_not_starts_with?: String;
    nationality_ends_with?: String;
    nationality_not_ends_with?: String;
    email?: String;
    email_not?: String;
    email_in?: String[] | String;
    email_not_in?: String[] | String;
    email_lt?: String;
    email_lte?: String;
    email_gt?: String;
    email_gte?: String;
    email_contains?: String;
    email_not_contains?: String;
    email_starts_with?: String;
    email_not_starts_with?: String;
    email_ends_with?: String;
    email_not_ends_with?: String;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    AND?: UserScalarWhereInput[] | UserScalarWhereInput;
    OR?: UserScalarWhereInput[] | UserScalarWhereInput;
    NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}
export interface UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput;
    data: UserUpdateManyDataInput;
}
export interface UserUpdateManyDataInput {
    nationality?: String;
    email?: String;
    name?: String;
}
export interface ThreadUpdateManyInput {
    create?: ThreadCreateInput[] | ThreadCreateInput;
    update?: ThreadUpdateWithWhereUniqueNestedInput[] | ThreadUpdateWithWhereUniqueNestedInput;
    upsert?: ThreadUpsertWithWhereUniqueNestedInput[] | ThreadUpsertWithWhereUniqueNestedInput;
    delete?: ThreadWhereUniqueInput[] | ThreadWhereUniqueInput;
    connect?: ThreadWhereUniqueInput[] | ThreadWhereUniqueInput;
    set?: ThreadWhereUniqueInput[] | ThreadWhereUniqueInput;
    disconnect?: ThreadWhereUniqueInput[] | ThreadWhereUniqueInput;
    deleteMany?: ThreadScalarWhereInput[] | ThreadScalarWhereInput;
    updateMany?: ThreadUpdateManyWithWhereNestedInput[] | ThreadUpdateManyWithWhereNestedInput;
}
export interface ThreadUpdateWithWhereUniqueNestedInput {
    where: ThreadWhereUniqueInput;
    data: ThreadUpdateDataInput;
}
export interface ThreadUpdateDataInput {
    author?: UserUpdateOneRequiredInput;
    name?: String;
    entry?: PostUpdateOneRequiredInput;
    replies?: PostUpdateManyInput;
}
export interface UserUpdateOneRequiredInput {
    create?: UserCreateInput;
    update?: UserUpdateDataInput;
    upsert?: UserUpsertNestedInput;
    connect?: UserWhereUniqueInput;
}
export interface UserUpsertNestedInput {
    update: UserUpdateDataInput;
    create: UserCreateInput;
}
export interface PostUpdateOneRequiredInput {
    create?: PostCreateInput;
    update?: PostUpdateDataInput;
    upsert?: PostUpsertNestedInput;
    connect?: PostWhereUniqueInput;
}
export interface PostUpdateDataInput {
    author?: UserUpdateOneRequiredWithoutPostsInput;
    content?: String;
    published?: Boolean;
    title?: String;
}
export interface UserUpdateOneRequiredWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    update?: UserUpdateWithoutPostsDataInput;
    upsert?: UserUpsertWithoutPostsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserUpdateWithoutPostsDataInput {
    nationality?: String;
    email?: String;
    name?: String;
}
export interface UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsDataInput;
    create: UserCreateWithoutPostsInput;
}
export interface PostUpsertNestedInput {
    update: PostUpdateDataInput;
    create: PostCreateInput;
}
export interface PostUpdateManyInput {
    create?: PostCreateInput[] | PostCreateInput;
    update?: PostUpdateWithWhereUniqueNestedInput[] | PostUpdateWithWhereUniqueNestedInput;
    upsert?: PostUpsertWithWhereUniqueNestedInput[] | PostUpsertWithWhereUniqueNestedInput;
    delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    set?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
    deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput;
    updateMany?: PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput;
}
export interface PostUpdateWithWhereUniqueNestedInput {
    where: PostWhereUniqueInput;
    data: PostUpdateDataInput;
}
export interface PostUpsertWithWhereUniqueNestedInput {
    where: PostWhereUniqueInput;
    update: PostUpdateDataInput;
    create: PostCreateInput;
}
export interface ThreadUpsertWithWhereUniqueNestedInput {
    where: ThreadWhereUniqueInput;
    update: ThreadUpdateDataInput;
    create: ThreadCreateInput;
}
export interface ThreadScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    AND?: ThreadScalarWhereInput[] | ThreadScalarWhereInput;
    OR?: ThreadScalarWhereInput[] | ThreadScalarWhereInput;
    NOT?: ThreadScalarWhereInput[] | ThreadScalarWhereInput;
}
export interface ThreadUpdateManyWithWhereNestedInput {
    where: ThreadScalarWhereInput;
    data: ThreadUpdateManyDataInput;
}
export interface ThreadUpdateManyDataInput {
    name?: String;
}
export interface PostUpdateInput {
    author?: UserUpdateOneRequiredWithoutPostsInput;
    content?: String;
    published?: Boolean;
    title?: String;
}
export interface PostUpdateManyMutationInput {
    content?: String;
    published?: Boolean;
    title?: String;
}
export interface ThreadUpdateInput {
    author?: UserUpdateOneRequiredInput;
    name?: String;
    entry?: PostUpdateOneRequiredInput;
    replies?: PostUpdateManyInput;
}
export interface ThreadUpdateManyMutationInput {
    name?: String;
}
export interface UserUpdateInput {
    nationality?: String;
    email?: String;
    name?: String;
    posts?: PostUpdateManyWithoutAuthorInput;
}
export interface UserUpdateManyMutationInput {
    nationality?: String;
    email?: String;
    name?: String;
}
export interface BoardSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: BoardWhereInput;
    AND?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput;
    OR?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput;
    NOT?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput;
}
export interface PostSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: PostWhereInput;
    AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
    OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
    NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}
export interface ThreadSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: ThreadWhereInput;
    AND?: ThreadSubscriptionWhereInput[] | ThreadSubscriptionWhereInput;
    OR?: ThreadSubscriptionWhereInput[] | ThreadSubscriptionWhereInput;
    NOT?: ThreadSubscriptionWhereInput[] | ThreadSubscriptionWhereInput;
}
export interface UserSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: UserWhereInput;
    AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
    OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
    NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}
export interface NodeNode {
    id: ID_Output;
}
export interface Board {
    id: ID_Output;
    createdAt: DateTimeOutput;
}
export interface BoardPromise extends Promise<Board>, Fragmentable {
    id: () => Promise<ID_Output>;
    createdAt: () => Promise<DateTimeOutput>;
    admins: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    members: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    threads: <T = FragmentableArray<Thread>>(args?: {
        where?: ThreadWhereInput;
        orderBy?: ThreadOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface BoardSubscription extends Promise<AsyncIterator<Board>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    admins: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    members: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    threads: <T = Promise<AsyncIterator<ThreadSubscription>>>(args?: {
        where?: ThreadWhereInput;
        orderBy?: ThreadOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface User {
    id: ID_Output;
    nationality?: String;
    email: String;
    name?: String;
}
export interface UserPromise extends Promise<User>, Fragmentable {
    id: () => Promise<ID_Output>;
    nationality: () => Promise<String>;
    email: () => Promise<String>;
    name: () => Promise<String>;
    posts: <T = FragmentableArray<Post>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface UserSubscription extends Promise<AsyncIterator<User>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    nationality: () => Promise<AsyncIterator<String>>;
    email: () => Promise<AsyncIterator<String>>;
    name: () => Promise<AsyncIterator<String>>;
    posts: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface Post {
    id: ID_Output;
    content?: String;
    createdAt: DateTimeOutput;
    published: Boolean;
    title: String;
    updatedAt: DateTimeOutput;
}
export interface PostPromise extends Promise<Post>, Fragmentable {
    id: () => Promise<ID_Output>;
    author: <T = UserPromise>() => T;
    content: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    published: () => Promise<Boolean>;
    title: () => Promise<String>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface PostSubscription extends Promise<AsyncIterator<Post>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    author: <T = UserSubscription>() => T;
    content: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    published: () => Promise<AsyncIterator<Boolean>>;
    title: () => Promise<AsyncIterator<String>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface Thread {
    id: ID_Output;
    createdAt: DateTimeOutput;
    name: String;
}
export interface ThreadPromise extends Promise<Thread>, Fragmentable {
    id: () => Promise<ID_Output>;
    createdAt: () => Promise<DateTimeOutput>;
    author: <T = UserPromise>() => T;
    name: () => Promise<String>;
    entry: <T = PostPromise>() => T;
    replies: <T = FragmentableArray<Post>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface ThreadSubscription extends Promise<AsyncIterator<Thread>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    author: <T = UserSubscription>() => T;
    name: () => Promise<AsyncIterator<String>>;
    entry: <T = PostSubscription>() => T;
    replies: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface BoardConnection {
    pageInfo: PageInfo;
    edges: BoardEdge[];
}
export interface BoardConnectionPromise extends Promise<BoardConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<BoardEdge>>() => T;
    aggregate: <T = AggregateBoardPromise>() => T;
}
export interface BoardConnectionSubscription extends Promise<AsyncIterator<BoardConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<BoardEdgeSubscription>>>() => T;
    aggregate: <T = AggregateBoardSubscription>() => T;
}
export interface PageInfo {
    hasNextPage: Boolean;
    hasPreviousPage: Boolean;
    startCursor?: String;
    endCursor?: String;
}
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
    hasNextPage: () => Promise<Boolean>;
    hasPreviousPage: () => Promise<Boolean>;
    startCursor: () => Promise<String>;
    endCursor: () => Promise<String>;
}
export interface PageInfoSubscription extends Promise<AsyncIterator<PageInfo>>, Fragmentable {
    hasNextPage: () => Promise<AsyncIterator<Boolean>>;
    hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
    startCursor: () => Promise<AsyncIterator<String>>;
    endCursor: () => Promise<AsyncIterator<String>>;
}
export interface BoardEdge {
    node: Board;
    cursor: String;
}
export interface BoardEdgePromise extends Promise<BoardEdge>, Fragmentable {
    node: <T = BoardPromise>() => T;
    cursor: () => Promise<String>;
}
export interface BoardEdgeSubscription extends Promise<AsyncIterator<BoardEdge>>, Fragmentable {
    node: <T = BoardSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateBoard {
    count: Int;
}
export interface AggregateBoardPromise extends Promise<AggregateBoard>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateBoardSubscription extends Promise<AsyncIterator<AggregateBoard>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PostConnection {
    pageInfo: PageInfo;
    edges: PostEdge[];
}
export interface PostConnectionPromise extends Promise<PostConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<PostEdge>>() => T;
    aggregate: <T = AggregatePostPromise>() => T;
}
export interface PostConnectionSubscription extends Promise<AsyncIterator<PostConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
    aggregate: <T = AggregatePostSubscription>() => T;
}
export interface PostEdge {
    node: Post;
    cursor: String;
}
export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
    node: <T = PostPromise>() => T;
    cursor: () => Promise<String>;
}
export interface PostEdgeSubscription extends Promise<AsyncIterator<PostEdge>>, Fragmentable {
    node: <T = PostSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregatePost {
    count: Int;
}
export interface AggregatePostPromise extends Promise<AggregatePost>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregatePostSubscription extends Promise<AsyncIterator<AggregatePost>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface ThreadConnection {
    pageInfo: PageInfo;
    edges: ThreadEdge[];
}
export interface ThreadConnectionPromise extends Promise<ThreadConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ThreadEdge>>() => T;
    aggregate: <T = AggregateThreadPromise>() => T;
}
export interface ThreadConnectionSubscription extends Promise<AsyncIterator<ThreadConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ThreadEdgeSubscription>>>() => T;
    aggregate: <T = AggregateThreadSubscription>() => T;
}
export interface ThreadEdge {
    node: Thread;
    cursor: String;
}
export interface ThreadEdgePromise extends Promise<ThreadEdge>, Fragmentable {
    node: <T = ThreadPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ThreadEdgeSubscription extends Promise<AsyncIterator<ThreadEdge>>, Fragmentable {
    node: <T = ThreadSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateThread {
    count: Int;
}
export interface AggregateThreadPromise extends Promise<AggregateThread>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateThreadSubscription extends Promise<AsyncIterator<AggregateThread>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
}
export interface UserConnectionPromise extends Promise<UserConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<UserEdge>>() => T;
    aggregate: <T = AggregateUserPromise>() => T;
}
export interface UserConnectionSubscription extends Promise<AsyncIterator<UserConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
    aggregate: <T = AggregateUserSubscription>() => T;
}
export interface UserEdge {
    node: User;
    cursor: String;
}
export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
    node: <T = UserPromise>() => T;
    cursor: () => Promise<String>;
}
export interface UserEdgeSubscription extends Promise<AsyncIterator<UserEdge>>, Fragmentable {
    node: <T = UserSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateUser {
    count: Int;
}
export interface AggregateUserPromise extends Promise<AggregateUser>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateUserSubscription extends Promise<AsyncIterator<AggregateUser>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface BatchPayload {
    count: Long;
}
export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
    count: () => Promise<Long>;
}
export interface BatchPayloadSubscription extends Promise<AsyncIterator<BatchPayload>>, Fragmentable {
    count: () => Promise<AsyncIterator<Long>>;
}
export interface BoardSubscriptionPayload {
    mutation: MutationType;
    node: Board;
    updatedFields: String[];
    previousValues: BoardPreviousValues;
}
export interface BoardSubscriptionPayloadPromise extends Promise<BoardSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = BoardPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = BoardPreviousValuesPromise>() => T;
}
export interface BoardSubscriptionPayloadSubscription extends Promise<AsyncIterator<BoardSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = BoardSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = BoardPreviousValuesSubscription>() => T;
}
export interface BoardPreviousValues {
    id: ID_Output;
    createdAt: DateTimeOutput;
}
export interface BoardPreviousValuesPromise extends Promise<BoardPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    createdAt: () => Promise<DateTimeOutput>;
}
export interface BoardPreviousValuesSubscription extends Promise<AsyncIterator<BoardPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface PostSubscriptionPayload {
    mutation: MutationType;
    node: Post;
    updatedFields: String[];
    previousValues: PostPreviousValues;
}
export interface PostSubscriptionPayloadPromise extends Promise<PostSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = PostPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = PostPreviousValuesPromise>() => T;
}
export interface PostSubscriptionPayloadSubscription extends Promise<AsyncIterator<PostSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = PostSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = PostPreviousValuesSubscription>() => T;
}
export interface PostPreviousValues {
    id: ID_Output;
    content?: String;
    createdAt: DateTimeOutput;
    published: Boolean;
    title: String;
    updatedAt: DateTimeOutput;
}
export interface PostPreviousValuesPromise extends Promise<PostPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    content: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    published: () => Promise<Boolean>;
    title: () => Promise<String>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface PostPreviousValuesSubscription extends Promise<AsyncIterator<PostPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    content: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    published: () => Promise<AsyncIterator<Boolean>>;
    title: () => Promise<AsyncIterator<String>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface ThreadSubscriptionPayload {
    mutation: MutationType;
    node: Thread;
    updatedFields: String[];
    previousValues: ThreadPreviousValues;
}
export interface ThreadSubscriptionPayloadPromise extends Promise<ThreadSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ThreadPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ThreadPreviousValuesPromise>() => T;
}
export interface ThreadSubscriptionPayloadSubscription extends Promise<AsyncIterator<ThreadSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ThreadSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ThreadPreviousValuesSubscription>() => T;
}
export interface ThreadPreviousValues {
    id: ID_Output;
    createdAt: DateTimeOutput;
    name: String;
}
export interface ThreadPreviousValuesPromise extends Promise<ThreadPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    createdAt: () => Promise<DateTimeOutput>;
    name: () => Promise<String>;
}
export interface ThreadPreviousValuesSubscription extends Promise<AsyncIterator<ThreadPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    name: () => Promise<AsyncIterator<String>>;
}
export interface UserSubscriptionPayload {
    mutation: MutationType;
    node: User;
    updatedFields: String[];
    previousValues: UserPreviousValues;
}
export interface UserSubscriptionPayloadPromise extends Promise<UserSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = UserPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = UserPreviousValuesPromise>() => T;
}
export interface UserSubscriptionPayloadSubscription extends Promise<AsyncIterator<UserSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = UserSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = UserPreviousValuesSubscription>() => T;
}
export interface UserPreviousValues {
    id: ID_Output;
    nationality?: String;
    email: String;
    name?: String;
}
export interface UserPreviousValuesPromise extends Promise<UserPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    nationality: () => Promise<String>;
    email: () => Promise<String>;
    name: () => Promise<String>;
}
export interface UserPreviousValuesSubscription extends Promise<AsyncIterator<UserPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    nationality: () => Promise<AsyncIterator<String>>;
    email: () => Promise<AsyncIterator<String>>;
    name: () => Promise<AsyncIterator<String>>;
}
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type DateTimeInput = Date | string;
export declare type DateTimeOutput = string;
export declare type String = string;
export declare type Boolean = boolean;
export declare type Int = number;
export declare type Long = string;
/**
 * Model Metadata
 */
export declare const models: Model[];
/**
 * Type Defs
 */
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
