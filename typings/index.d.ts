import { APIMessage, APIMessageContentResolvable, Channel, Client, Collection, Collector, DMChannel, Guild, GuildMember, Message, MessageAdditions, MessageOptions, NewsChannel, Snowflake, SplitOptions, StringResolvable, TextChannel, User, WebhookClient, WebhookMessageOptions } from 'discord.js'

declare module 'discord-buttons' {

    export default function (client: Client)

    interface ExtendedMessageOptions extends MessageOptions {
        component?: MessageButton | MessageActionRow;
        components?: MessageActionRow[];
    }

    export class exports extends WebhookClient {
        editMessage(message: any, content: any, options: any): Promise<any>;
        deleteMessage(message: any): Promise<void>;
        fetchMessage(message: any, cache?: boolean): Promise<any>;
    }

    export class ExtendedMessage extends Message {
        _patch(data: any): Message;
        components: any;
        createButtonCollector(filter: any, options?: {}): ButtonCollector;
        awaitButtons(filter: any, options?: {}): Promise<any>;
    }

    export class ButtonCollector extends Collector<any, any> {
        constructor(message: Message, filter: any, options?: {});
        message: Message;
        users: Collection<any, any>;
        total: number;
        empty(): void;
        endReason(): string | null;
        _handleChannelDeletion(channel: Channel): void;
        _handleGuildDeletion(guild: Guild): void;
        _handleMessageDeletion(message: Message): void;

        collect(args: any): any

        dispose(args: any): any
    }

    export class ButtonEvent {
        constructor(client: Client, data: object);
        client: Client;
        id: Snowflake;
        version: any;
        token: string;
        discordID: Snowflake;
        applicationID: Snowflake;
        guild: Guild;
        channel: Channel;
        clicker: {
            user: User;
            member: GuildMember;
            fetch: () => Promise<boolean>;
        };
        message: Message;
        webhook: WebhookClient;
        replied: boolean;
        deferred: boolean;
        defer(ephemeral?: boolean): Promise<void>;
        think(ephemeral?: boolean): Promise<void>;
        followUp(content: any, options: any): Promise<void>;
        get reply(): {
            send: (content: any, options: MessageOptions | WebhookMessageOptions | MessageAdditions | { ephemeral: boolean } ) => Promise<void>;
            fetch: () => Promise<any>;
            edit: (content: any, options: any) => Promise<any>;
            delete: () => Promise<void>;
        };
    }

    export class BaseMessageComponent {
        static create(data: object): MessageActionRow | MessageButton;
        constructor(data: object);
        type: any;
    }

    export class MessageActionRow extends BaseMessageComponent {
        constructor(data?: {});
        setup(data: any): MessageActionRow;
        component: MessageActionRow | MessageButton;
        components: any;
        addComponents(...components: any[]): MessageActionRow;
        addComponent(component: any): MessageActionRow;
        toJSON(): {
            components: any;
            type: any;
        };
    }

    export class MessageButton extends BaseMessageComponent {
        constructor(data?: {});
        setup(data: any): MessageButton;
        style: string;
        label: string;
        disabled: boolean;
        emoji: string;
        url: string;
        custom_id: string;
        setStyle(style: MessageButtonStyles): MessageButton;
        setLabel(label: string): MessageButton;
        setDisabled(disabled?: boolean): MessageButton;
        setURL(url: string): MessageButton;
        setID(id: string): MessageButton;
        setEmoji(emoji: string): MessageButton;
        toJSON(): {
            type: string;
            style: string;
            label: string;
            emoji: string;
            disabled: boolean;
            url: string;
            custom_id: string;
        };
    }

    export interface ExtendedTextChannel extends TextChannel {
        send(
            content: APIMessageContentResolvable | (ExtendedMessageOptions & { split?: false }) | MessageAdditions,
        ): Promise<Message>;

        send(options: ExtendedMessageOptions & { split: true | SplitOptions }): Promise<Message[]>;

        send(options: ExtendedMessageOptions | APIMessage): Promise<Message | Message[]>;

        send(content: StringResolvable, options: (ExtendedMessageOptions & { split?: false }) | MessageAdditions): Promise<Message>;

        send(content: StringResolvable, options: ExtendedMessageOptions & { split: true | SplitOptions }): Promise<Message[]>;

        send(content: StringResolvable, options: ExtendedMessageOptions | MessageButton): Promise<Message | Message[]>;
    }

    export interface ExtendedDMChannel extends DMChannel {
        send(
            content: APIMessageContentResolvable | (ExtendedMessageOptions & { split?: false }) | MessageAdditions,
        ): Promise<Message>;

        send(options: ExtendedMessageOptions & { split: true | SplitOptions }): Promise<Message[]>;

        send(options: ExtendedMessageOptions | APIMessage): Promise<Message | Message[]>;

        send(content: StringResolvable, options: (ExtendedMessageOptions & { split?: false }) | MessageAdditions): Promise<Message>;

        send(content: StringResolvable, options: ExtendedMessageOptions & { split: true | SplitOptions }): Promise<Message[]>;

        send(content: StringResolvable, options: ExtendedMessageOptions | MessageButton): Promise<Message | Message[]>;
    }

    export interface ExtendedNewsChannel extends NewsChannel {
        send(
            content: APIMessageContentResolvable | (ExtendedMessageOptions & { split?: false }) | MessageAdditions,
        ): Promise<Message>;

        send(options: ExtendedMessageOptions & { split: true | SplitOptions }): Promise<Message[]>;

        send(options: ExtendedMessageOptions | APIMessage): Promise<Message | Message[]>;

        send(content: StringResolvable, options: (ExtendedMessageOptions & { split?: false }) | MessageAdditions): Promise<Message>;

        send(content: StringResolvable, options: ExtendedMessageOptions & { split: true | SplitOptions }): Promise<Message[]>;

        send(content: StringResolvable, options: ExtendedMessageOptions | MessageButton): Promise<Message | Message[]>;
    }

    enum MessageComponentTypes {
        ACTION_ROW,
        BUTTON,
        SELECT_MENU
    }

    export enum MessageButtonStyles {
        PRIMARY = 'blurple',
        SECONDARY = 'grey',
        SUCCESS = 'green',
        DESTRUCTIVE = 'red',
        LINK = 'url'
    }


}
