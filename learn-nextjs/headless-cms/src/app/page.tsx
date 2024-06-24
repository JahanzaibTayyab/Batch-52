import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import dayjs from "dayjs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Interface for Link type
interface Link {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
}

// Interface for Sys type
interface Sys {
  space?: Link;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment?: Link;
  revision: number;
  contentType?: Link;
  locale: string;
}

// Interface for Asset file details
interface AssetFileDetails {
  size: number;
  image: {
    width: number;
    height: number;
  };
}

// Interface for Asset file
interface AssetFile {
  url: string;
  details: AssetFileDetails;
  fileName: string;
  contentType: string;
}

// Interface for Asset fields
interface AssetFields {
  title: string;
  description: string;
  file: AssetFile;
}

// Interface for Asset
interface Asset {
  metadata: {
    tags: any[];
  };
  sys: Sys;
  fields: AssetFields;
}

// Interface for Entry fields
interface EntryFields {
  title?: string;
  shortDescription?: string;
  createdAt?: string;
  createdBy?: Link;
  name?: string;
  image?: Link;
}

// Interface for Entry
interface Entry {
  metadata: {
    tags: any[];
  };
  sys: Sys;
  fields: EntryFields;
}

// Interface for Includes
interface Includes {
  Entry: Entry[];
  Asset: Asset[];
}

// Interface for Items
interface Item {
  metadata: {
    tags: any[];
  };
  sys: Sys;
  fields: EntryFields;
}

// Interface for the main structure
interface BlogData {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: Item[];
  includes: Includes;
}

const getBlogs = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  } else return await response.json();
};

export default async function Home() {
  const blogs: BlogData = await getBlogs();

  return (
    <main className="p-24">
      <div className="flex  flex-col items-center">
        <p>This is Blog Website</p>
      </div>

      <div className="flex gap-5">
        {blogs.items.map((item) => (
          <Card className="w-96">
            <CardHeader>
              <CardTitle>{item.fields.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.fields.shortDescription}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Avatar>
                <AvatarImage
                  src={
                    "https:" +
                    blogs.includes.Asset.find(
                      (asset) =>
                        asset.sys.id ==
                        blogs.includes.Entry.find(
                          (ref) =>
                            ref.sys.id == item?.fields?.createdBy?.sys?.id
                        )?.fields?.image?.sys?.id
                    )?.fields.file.url
                  }
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>
                {
                  blogs.includes.Entry.find(
                    (ref) => ref.sys?.id == item?.fields?.createdBy?.sys?.id
                  )?.fields.name
                }
              </p>
              <p>{dayjs(item.fields.createdAt).format("ddd-MMMM-YY hh-m")}</p>
            </CardFooter>
          </Card>
          // <li>{item.fields.title}</li>
        ))}
      </div>
    </main>
  );
}
