package org.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UncheckedIOException;
import java.net.http.HttpClient;
import java.nio.charset.StandardCharsets;
import java.util.Objects;
import java.util.stream.Collectors;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

public class Main {
	public static void main(String[] args) throws Exception {
		Context context = Context.newBuilder("js").allowHostAccess(HostAccess.EXPLICIT).build();
		try {
			final Source source = Source.newBuilder("js", getFunction(), "function").build();
			context.getBindings("js").putMember("hostObject", new HostObject());
			Value result = context.eval(source);
		} catch (Throwable e) {
			e.printStackTrace();
		} finally {
			context.close(true);
		}
	}

	private static String getFunction() {
		ClassLoader cl = Thread.currentThread().getContextClassLoader();
		try (BufferedReader br = new BufferedReader(new InputStreamReader(Objects.requireNonNull(cl.getResourceAsStream("js_function.js")), StandardCharsets.UTF_8))) {
			return br.lines().collect(Collectors.joining("\n"));
		} catch (IOException e) {
			throw new UncheckedIOException(e);
		}
	}
}